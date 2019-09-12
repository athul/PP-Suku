from django.shortcuts import render
from rest_framework import viewsets,permissions
from .models import user,main
from .serializers import UserSerializer,MainSerializer
from django.contrib.auth.mixins import LoginRequiredMixin# Create your views here.

class UserAPI(viewsets.ModelViewSet):
    queryset=user.objects.all()
    serializer_class=UserSerializer
    permission_classes=(permissions.IsAuthenticatedOrReadOnly,)
class mainAPI(viewsets.ModelViewSet):
    queryset=main.objects.all()
    serializer_class=MainSerializer
    permission_classes=(permissions.IsAuthenticatedOrReadOnly,)