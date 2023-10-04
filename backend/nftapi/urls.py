from django.urls import path, include
from .views import *
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView, TokenVerifyView,
# )



urlpatterns = [
    path('api/v1/register', RegisterAPIView.as_view(), name = 'register'),
    path('api/v1/login', LoginAPIView.as_view(), name='login'),
    path('api/v1/user', UserAPIView.as_view(), name='user'),
    path('api/v1/refresh', RefreshAPIView.as_view(), name='refresh'),
    path('api/v1/logout', LogoutAPIView.as_view(), name='logout'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    ]