from django.urls import path,include
#from rest_framework import routers
from . import views

""" router=routers.DefaultRouter()
router.register('User',views.UserAPI) """
urlpatterns = [
        path('',views.index, name='index'),
        #path('/add',views.user_new,name='useradd'),
]
