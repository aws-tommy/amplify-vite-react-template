import { defineFunction } from '@aws-amplify/backend';

export const preAuthentication = defineFunction({
  name: 'pre-authentication',
  timeoutSeconds: 5,
  runtime: 20
  // optionally define an environment variable for your filter
  /*
  environment: {
    ALLOW_DOMAIN: 'amazon.com'
  }
  */
});