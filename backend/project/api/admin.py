from django.contrib import admin
from .models import Message

# Register your models here.

# admin.site.register(Message)

@admin.register(Message)
class InboxModel(admin.ModelAdmin):
    list_display = ('sender', 'title')

# class SentModel(admin.ModelAdmin):
#     list_display = ('recipient', 'title')