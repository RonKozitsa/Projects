from rest_framework import serializers
from .models import Category, Request

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name', ]

class RequestSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(queryset=Category.objects.all(), slug_field='name')

    class Meta:
        model = Request
        fields = ['uid', 'category', 'time', 'location', 'app_token', ]
