import io
from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import CustomUserSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import APIException
from rest_framework.authentication import get_authorization_header
from .authentication import *
from rest_framework.exceptions import AuthenticationFailed


# class RegisterAPI(generics.ListCreateAPIView):
#     queryset = CustomUser.objects.all()
#     serializer_class = CustomUserSerializer
#     permission_classes = (AllowAny, )

class RegisterAPIView(APIView):
    def post(self,request):
        new_querydict = {'username': request.data['username'], 'password': request.data['password']} #преобразовываем приходящие ключи
        serializer = CustomUserSerializer(data=new_querydict)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def get(self,request):
        user = CustomUser.objects.all()
        return Response(CustomUserSerializer(user, many=True).data)

class LoginAPIView(APIView):
    def post(self, request):
        new_querydict = {'username': request.data['username'], 'password': request.data['password']}
        user = CustomUser.objects.filter(username=new_querydict['username']).first()
        if not user:
            raise APIException('User not found')
        if not user.check_password(new_querydict['password']):
            raise APIException('Invalid password')

        access_token = create_access_token(user.id)
        refresh_token = create_refresh_token(user.id)

        response = Response()

        response.set_cookie(key='refreshToken', value=refresh_token, httponly=True)
        response.data = {
            'token': access_token
        }

        return response

class UserAPIView(APIView):
    def get(self, request):
        auth = get_authorization_header(request).split()
        print(auth)

        if auth and len(auth) == 2:
            token = auth[1].decode('utf-8')

            id = decode_access_token(token)

            user = CustomUser.objects.filter(pk=id).first()

            return Response(CustomUserSerializer(user).data)
        raise AuthenticationFailed('unauthenticated')


class RefreshAPIView(APIView):
    def post(self, request):
        refresh_token = request.COOKIES.get('refreshToken')
        print(type(refresh_token))
        id = decode_refresh_token(refresh_token)
        print(id)
        access_token = create_access_token(id)
        return Response({
            'token': access_token
        })

class LogoutAPIView(APIView):
    def post(self, _):
        response = Response()
        response.delete_cookie(key='refreshToken')
        response.data = {
            'message': 'success'
        }
        return response



