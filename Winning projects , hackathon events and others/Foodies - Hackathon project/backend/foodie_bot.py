import slack
from os import environ
from firebase_admin import messaging, initialize_app

BOT_TOKEN = environ['FOODIES_BOT_TOKEN']


class Singleton(type):
    _instances = {}

    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super(Singleton, cls).__call__(*args, **kwargs)
        return cls._instances[cls]


class SlackBot(object, metaclass=Singleton):
    def __init__(self):
        self.__client = slack.WebClient(BOT_TOKEN)
        self.default_app = initialize_app()

    def post_message(self, channel, message):
        response = self.__client.chat_postMessage(
            channel=channel,
            text=message)
        assert response["ok"]
        assert response["message"]["text"] == message

    def create_group(self, users, message):
        response = self.__client.conversations_open(users=users)
        assert response["ok"]
        self.post_message(response["channel"]['id'], message)
        return response["channel"]['id']

    def get_users(self):
        users = []
        for user in self.__client.users_list()['members']:
            if 'email' not in user['profile'] \
                    or 'real_name' not in user['profile'] \
                    or 'tz' not in user \
                    or user['is_bot'] :
                continue
            users.append({
                'uid': user['id'],
                'username': user['name'],
                'real_name': user['profile']['real_name'],
                'tz': user['tz'],
                'email': user['profile']['email'],
            })

        return users


def create_group(user_ids, restaurant_name, time_to_leave):
    bot = SlackBot()
    users = [x['username'] for x in bot.get_users() if x['uid'] in user_ids]
    android_users = [{'name': x['username'], 'token': x['token']} \
                     for x in bot.get_users() if x['username'] in users and 'token' in x]
    assert isinstance(restaurant_name, str)
    message = 'hi ' + ', '.join(users[:-1]) + ' and ' + users[-1] + ' you are going together to ' + restaurant_name \
              + ' and you will need to leave by ' + time_to_leave
    if len(android_users):
        for user in android_users:
            android_message = messaging.Message(
                data={
                    'message': message,
                },
                token=user['token'],
            )
            response = messaging.send(android_message)
    return bot.create_group(user_ids, message)
