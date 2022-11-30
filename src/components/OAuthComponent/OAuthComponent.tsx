import { LoginButton } from '../LoginButton';
import { LogoutButton } from '../LogoutButton';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import { useStoreState } from '../../store/hooks';

export const OAuthComponent = () => {
  const { authData } = useStoreState((state) => state.auth);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
      });
    }

    gapi.load('client:auth2', start);
  });

  return (
    <div className='flex justify-center'>
      {authData ? <LogoutButton /> : <LoginButton />}
    </div>
  );
};
