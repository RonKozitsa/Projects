# Generated by Django 2.2.3 on 2019-07-17 14:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('foodies', '0003_auto_20190717_1347'),
    ]

    operations = [
        migrations.AddField(
            model_name='restarunt',
            name='categories',
            field=models.ManyToManyField(blank=True, to='foodies.Category'),
        ),
    ]
