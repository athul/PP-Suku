"""porter URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from graphene_django.views import GraphQLView
from generator.views import UserAPI
from django.conf.urls import url
from porter.schema import schema

router=routers.DefaultRouter()
router.register('User',UserAPI)
urlpatterns = [
    path('', include('frontend.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
    path('API/',include(router.urls)),
    url(r'^graphql$', GraphQLView.as_view(graphiql=True,schema=schema)),
    path('api-auth/',include('rest_framework.urls'))
]
