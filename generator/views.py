from django.shortcuts import render
from rest_framework import viewsets
from .models import user
from .serializers import UserSerializer
from django.contrib.auth.mixins import LoginRequiredMixin# Create your views here.

class UserAPI(LoginRequiredMixin,viewsets.ModelViewSet):
    login_url = 'accounts/login/'
    queryset=user.objects.all()
    serializer_class=UserSerializer