import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";

export async function handler(event: APIGatewayProxyEvent,
   context: Context): Promise<APIGatewayProxyResult> {

   const lambdaRequestId = context.awsRequestId
   const apiRequestId = event.requestContext.requestId

   console.log("API Gateway RequestId: ", apiRequestId, " Lambda RequestId: ", lambdaRequestId)

   const method = event.httpMethod
   if (event.resource === "/clientes") {
      if (method === "GET") {
         console.log("GET")
         return {
            statusCode: 200,
            body: JSON.stringify({
               "nome": "Isabelly Vera Lopes",
               "idade": 57,
               "cpf": "306.016.591-20",
               "rg": "38.439.557-0",
               "data_nasc": "19/01/1966",
               "sexo": "Feminino"
            })
         }
      }
   }
   return {
      statusCode: 400,
      body: JSON.stringify({
         message: "Bad request"
      })
   }
}