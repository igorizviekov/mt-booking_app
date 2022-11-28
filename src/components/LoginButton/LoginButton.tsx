import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';

export const LoginButton = () => {
  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) =>
    console.log(res);
  const onFailure = (res: GoogleLoginResponse | GoogleLoginResponseOffline) =>
    console.log(res);

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_CLIENT_ID!}
      buttonText='Login'
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
    />
  );
};
