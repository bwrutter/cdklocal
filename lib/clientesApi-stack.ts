import * as cdk from "aws-cdk-lib"
import * as lambdaNodeJS from "aws-cdk-lib/aws-lambda-nodejs"
import * as apigateway from "aws-cdk-lib/aws-apigateway"
import * as cwlogs from "aws-cdk-lib/aws-logs"
import { Construct } from "constructs"

interface ClientesApiStackProps extends cdk.StackProps {
   clientesHandler: lambdaNodeJS.NodejsFunction
}

export class ClientesApiStack extends cdk.Stack {

   constructor(scope: Construct, id: string, props: ClientesApiStackProps) {
      super(scope, id, props)

      const logGroup = new cwlogs.LogGroup(this, "ClientesApiLogs")
      const api = new apigateway.RestApi(this, "ClientesApi", {
         restApiName: "ClientesApi",
      })

      const clientesIntegration = new apigateway.LambdaIntegration(props.clientesHandler)

      const clientesResource = api.root.addResource("clientes")
      clientesResource.addMethod("GET", clientesIntegration)
   }
}
