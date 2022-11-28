import { GoogleLogout } from 'react-google-login';

export const LogoutButton = () => {
  const onSuccess = () => {
    localStorage.removeItem('authData');
    window.location.reload();
  };

  return (
    <GoogleLogout
      clientId={process.env.REACT_APP_CLIENT_ID!}
      buttonText='Logout'
      onLogoutSuccess={onSuccess}
    />
  );
};
