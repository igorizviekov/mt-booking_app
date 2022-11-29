import React, { useState } from 'react';
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { Navigate } from 'react-router-dom';
import { displayErrorMessage, displaySuccessMessage } from '../../lib/utils';

export const LoginButton = () => {
  const [isRedirect, setIsRedirect] = useState<boolean>(false);
  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    localStorage.setItem('authData', JSON.stringify(res));
    setIsRedirect(true);
    displaySuccessMessage('Success!', 'Logged in succesfully');
  };

  const onFailure = (res: any) => {
    displayErrorMessage('Error!', res.error);
  };

  return (
    <>
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID!}
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
      {isRedirect ? (
        <Navigate
          to={{
            pathname: '/user/123',
          }}
        />
      ) : null}
    </>
  );
};
