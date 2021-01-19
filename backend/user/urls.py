from django.urls import path
from .views import UserProfileView

urlpatterns = [
    path('userprofile', UserProfileView.as_view(), name='userprofile' ),
]
