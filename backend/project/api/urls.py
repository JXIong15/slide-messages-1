from django.urls import path, include
from .views import MessageViewSet, UserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('messages', MessageViewSet, basename='messages')
router.register('users', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls))
    # path('messages/', MessageList.as_view()),
    # path('messages/<int:id>/', MessageDetails.as_view()),

    # path('messages/', message_list),
    # path('messages/<int:pk>/', message_details),
]
