import graphene

from graphene_django.types import DjangoObjectType
from .models import user

class userType(DjangoObjectType):
    class Meta:
        model=user

class Query(object):
    all_users=graphene.List(userType)

    def resolve_allUsers(self):
        return user.objects.all()
    