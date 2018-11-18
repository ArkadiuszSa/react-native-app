from django.db import models
from users.models import User
class Note(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    description = models.CharField(max_length=100, blank=True, default='')
    date = models.CharField(max_length=100, blank=True, default='')
    isDone = models.BooleanField(default=False)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    class Meta:
        ordering = ('created',)