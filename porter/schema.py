import graphene
import generator.schema

class Query(generator.schema.Query,graphene.ObjectType):
    pass

schema=graphene.Schema(query=Query)
