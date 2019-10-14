import graphene

from graphene_django.types import DjangoObjectType
from .models import user

class userType(DjangoObjectType):
    class Meta:
        model=user

class Query(object):
    user=graphene.Field(userType,id=graphene.Int())
    all_users=graphene.List(userType)
    def resolve_user(self,info,**kwargs):
        id=kwargs('id')
        if id is not None:
            return user.objects.get(pk=id)
        return None
    def resolve_all_users(self,info, **kwargs):
        return user.objects.all()
    
    