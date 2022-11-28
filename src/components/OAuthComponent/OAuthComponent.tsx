import { LoginButton } from '../LoginButton';
import { LogoutButton } from '../LogoutButton';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';

export const OAuthComponent = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
      });
    }

    gapi.load('client:auth2', start);
  });
  return localStorage.getItem('authData') ? <LogoutButton /> : <LoginButton />;
};
