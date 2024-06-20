import { defineAuth } from '@aws-amplify/backend';
import { preAuthentication } from './pre-authentication/resource';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  triggers: {
    preAuthentication
  },
  access: (allow) => [
    allow.resource(preAuthentication).to(["manageUsers"])
  ]
});
