from django.urls import path, include
from .views import MessageViewSet, UserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('messages', MessageViewSet, basename='messages')
router.register('users', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls))
]
