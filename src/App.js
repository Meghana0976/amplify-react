import {Amplify} from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user}){
  return (
    <>
      <h1>Hello Welcome {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  )
}

export default withAuthenticator(App);
