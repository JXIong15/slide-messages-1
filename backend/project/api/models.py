from django.db import models

class Message(models.Model):
    sender = models.CharField(max_length=30)
    recipient = models.CharField(max_length=30)
    title = models.CharField(max_length=100)
    body = models.TextField()

    def __str__(self):
        return self.title