import { GoogleLogout } from 'react-google-login';
import { displayErrorMessage, displaySuccessMessage } from '../../lib/utils';
import { useStoreActions } from '../../store/hooks';

export const LogoutButton = () => {
  const logout = useStoreActions((actions) => actions.logout);
  const onSuccess = () => {
    logout();
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
