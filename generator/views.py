from django.shortcuts import render
from rest_framework import viewsets,permissions
from .models import user
from .forms import userForm
from .serializers import UserSerializer
from django.contrib.auth.mixins import LoginRequiredMixin# Create your views here.

class UserAPI(viewsets.ModelViewSet):
    queryset=user.objects.all()
    serializer_class=UserSerializer
    permission_classes=(permissions.IsAuthenticatedOrReadOnly,)

def user_new():
    form=userForm
    return render(request, 'blog/post_edit.html', {'form': form})