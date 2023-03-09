import * as cdk from "aws-cdk-lib"
import * as lambda from "aws-cdk-lib/aws-lambda"
import * as lambdaNodeJS from "aws-cdk-lib/aws-lambda-nodejs"
import { Construct } from "constructs"

export class ClientesAppStack extends cdk.Stack {
   readonly clientesHandler: lambdaNodeJS.NodejsFunction

   constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props)

      this.clientesHandler = new lambdaNodeJS.NodejsFunction(this, 
         "ClientesFunction", {
            functionName: "ClientesFunction",
            entry: "lambdas/clientesFunction.ts",
            handler: "handler",
            memorySize: 512,
            timeout: cdk.Duration.seconds(10),
            runtime: lambda.Runtime.NODEJS_14_X,
            bundling: {
               minify: true             
            },            
         })
   }
}