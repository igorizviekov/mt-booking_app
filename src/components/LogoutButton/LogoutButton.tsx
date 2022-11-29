import { GoogleLogout } from 'react-google-login';
import { displayErrorMessage, displaySuccessMessage } from '../../lib/utils';

export const LogoutButton = () => {
  const onSuccess = () => {
    localStorage.removeItem('authData');
    displaySuccessMessage('Success', 'You were successfully logout');
  };

  const onFailure = () => {
    displayErrorMessage('Error!', 'Try again later');
  };

  return (
    <GoogleLogout
      clientId={process.env.REACT_APP_CLIENT_ID!}
      buttonText='Logout'
      onLogoutSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
};
