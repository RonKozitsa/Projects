from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=256)

    def __str__(self):
        return self.name

class Request(models.Model):
    LOCATIONS = (
        ('ta', 'ta'),
        ('out', 'out')
    )

    uid = models.CharField(max_length=32)
    category = models.ForeignKey(Category, models.SET_NULL, blank=True, null=True)
    time = models.TimeField()
    location = models.CharField(max_length=32, choices=LOCATIONS)
    app_token = models.CharField(max_length=512, default='', blank=True, null=True)

    def __str__(self):
        return f'Request(uid={self.uid}, {self.category.name} at {self.time:%H:%M})'

    def __repr__(self):
        return f'Request(#{self.id}, uid={self.uid}, location={self.category.name} at {self.time:%H:%M})'
