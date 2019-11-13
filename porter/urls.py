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
from generator.views import UserAPI,index,user_new
from django.conf.urls import url
from porter.schema import schema
from django.views.decorators.csrf import csrf_exempt
from graphql_playground.views import GraphQLPlaygroundView


router=routers.DefaultRouter()
router.register('User',UserAPI)
urlpatterns = [
    path('pages/', include('frontend.urls')),
    path('admin/',admin.site.urls),
    path('', include('generator.urls')),
    path('add/',user_new),
    path('accounts/', include('django.contrib.auth.urls')),
    path('API/',include(router.urls)),
    path('graphql/', csrf_exempt(GraphQLView.as_view(graphiql=False, schema=schema))),
    path('api-auth/',include('rest_framework.urls')),
    path('playground/',GraphQLPlaygroundView.as_view(endpoint="http://127.0.0.1:8000/graphql/"))
]
