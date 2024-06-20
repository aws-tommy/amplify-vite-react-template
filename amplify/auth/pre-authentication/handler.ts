import type { PreAuthenticationTriggerHandler } from 'aws-lambda';
import { CognitoIdentityProviderClient, AdminUserGlobalSignOutCommand } from '@aws-sdk/client-cognito-identity-provider'; 
const client = new CognitoIdentityProviderClient();

export const handler: PreAuthenticationTriggerHandler = async (event) => {
  console.log(event)
  
  const input = { 
    UserPoolId: event['userPoolId'], // required
    Username: event['userName'], // required
  };
  
  const command = new AdminUserGlobalSignOutCommand(input);
  const response = await client.send(command);
  await new Promise(s => setTimeout(s, 3000))
  console.log("wait after 3 seconds")

  return event;
  
};