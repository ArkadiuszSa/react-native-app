from django.db import models

class Note(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    mark = models.CharField(max_length=100, blank=True, default='')

    class Meta:
        ordering = ('created',)