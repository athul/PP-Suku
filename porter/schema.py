import graphene
import generator.schema
import graphql_jwt
class Query(generator.schema.Query,graphene.ObjectType):
    pass
class Mutation(generator.schema.Mutation,graphene.ObjectType,):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()
schema=graphene.Schema(query=Query, mutation=Mutation)
