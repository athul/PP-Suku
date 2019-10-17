import graphene
from django.contrib.auth import get_user_model
from graphene_django.types import DjangoObjectType
from .models import user

class userType(DjangoObjectType):
    class Meta:
        model=user

class Query(object):
    user=graphene.Field(userType,id=graphene.Int())
    all_users=graphene.List(userType)
    def resolve_user(self,info,id=None,**kwargs):
        if id is not None:
            return user.objects.get(pk=id)
        return None
    def resolve_all_users(self,info, **kwargs):
        return user.objects.all()
class UserType(DjangoObjectType):
    class Meta:
        model = user


class CreateUser(graphene.Mutation):
    User = graphene.Field(UserType)

    class Arguments:
        Name = graphene.String(required=True)
        Email = graphene.String(required=True)

    def mutate(self, info, Name, Email):
        User = user(
            Name=Name,
            Email=Email,
        )
        #User.set_password(password)
        User.save()

        return CreateUser(User=User)


class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
    