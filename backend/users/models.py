from django.db import models

class User(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    email = models.CharField(max_length=100, blank=True, default='')
    password = models.CharField(max_length=100, blank=True, default='')
    class Meta:
        ordering = ('created',)