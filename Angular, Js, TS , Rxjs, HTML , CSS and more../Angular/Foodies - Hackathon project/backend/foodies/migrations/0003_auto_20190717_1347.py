# Generated by Django 2.2.3 on 2019-07-17 13:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('foodies', '0002_request_app_token'),
    ]

    operations = [
        migrations.RenameField(
            model_name='request',
            old_name='restartunt',
            new_name='restarunt',
        ),
    ]