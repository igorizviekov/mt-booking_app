import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';

export const LoginButton = () => {
  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    localStorage.setItem('authData', JSON.stringify(res));
    window.location.reload();
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_CLIENT_ID!}
      buttonText='Login'
      onSuccess={onSuccess}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
    />
  );
};
