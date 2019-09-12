from rest_framework import serializers
from .models import user,main

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=user
        fields=('__all__')
class MainSerializer(serializers.ModelSerializer):
    Users=UserSerializer()
    class Meta:
        model=main
        fields=('__all__')