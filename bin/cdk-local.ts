import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { ClientesAppStack } from "../lib/clientesApp-stack";
import { ClientesApiStack } from "../lib/clientesApi-stack";

const app = new cdk.App();

const env: cdk.Environment = {
  account: "000000000000",
  region: "sa-east-1" 
}

const tags = {
  cost: "TesteAPI!",
  team: "DevHero"
}

const clientesAppStack = new ClientesAppStack(app, "ClientesApp", {
  tags: tags,
  env: env
})

const clientesApiStack = new ClientesApiStack(app, "ClientesApi", {
  clientesHandler: clientesAppStack.clientesHandler,
  tags: tags,
  env: env
})
clientesApiStack.addDependency(clientesAppStack)