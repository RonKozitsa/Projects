from random import choice
from http import HTTPStatus
from datetime import datetime, timedelta
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_GET
from django.views.decorators.cache import cache_page
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import CategorySerializer, RequestSerializer
from .models import Category, Request
from foodie_bot import SlackBot

BOT = SlackBot()

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class RequestViewSet(viewsets.ModelViewSet):
    queryset = Request.objects.all()
    serializer_class = RequestSerializer

class UserViewSet(viewsets.ViewSet):
    def list(self, request):
        return Response({ 'users': BOT.get_users(), })

@require_GET
def build_groups(request):
    try:
        (start_hour, start_minutes) = map(int, request.GET.get('start', '0:0').split(':'))
        duration = int(request.GET.get('duration', '15'))
    except Exception as e:
        return JsonResponse(
            { 'ok': False, 'error': e, },
            status = HTTPStatus.BAD_REQUEST)

    if (start_hour, start_minutes) <= (0, 0) or 23 < start_hour or 59 < start_minutes:
        return JsonResponse({
            'ok': False,
            'error': f"Invalid time '{start_hour:02d}:{start_minutes:02d}'",
        }, status = HTTPStatus.BAD_REQUEST)

    time_start = datetime.now().replace(hour=start_hour, minute=start_minutes, second=0, microsecond=0)
    time_end = time_start + timedelta(minutes=duration)
    (time_start, time_end) = (time_start.time(), time_end.time())

    requests = Request.objects.filter(time__gte=time_start, time__lt=time_end)
    groups = {}
    uids = set()
    for request in requests:
        if not request.category:
            continue
        groups.setdefault(request.category, []).append(request)
        uids.add(request.uid)

    # Remove groups with only one member
    loners = set([r for r in requests if r.uid not in uids])
    for (restarunt_name, requests) in groups.copy().items():
        if 1 < len(requests):
            continue
        (uid, ) = groups.pop(restarunt_name)
        loners.add(uid)

    for (location, requests) in groups.items():
        time = min(r.time for r in requests)
        BOT.create_group(
            [r.uid for r in requests],
            f"Hi ya'll :)\nGet ready to eat some *{location.name}* at {time:%H:%M}")

    # Handle loners
    if 1 < len(loners):
        time = min(r.time for r in loners)
        suggestion = choice([r.category.name for r in loners])
        BOT.create_group(
            [r.uid for r in loners],
            f"I couldn't match any of your requests :(\nMaybe you can try some *{suggestion}* at {time:%H:%M}?")
    elif 1 == len(loners):
        (request, ) = loners
        BOT.post_message(request.uid, f"Sorry! I couldn't find anyone to have *{request.category.name}* with you :(")

    return JsonResponse({
        'ok': True,
        'start': f'{start_hour:02d}:{start_minutes:02d}',
        'duration': duration,
        'groups': {repr(c): [repr(r) for r in rs] for (c, rs) in groups.items()},
        'loners': [repr(r) for r in loners],
    })
