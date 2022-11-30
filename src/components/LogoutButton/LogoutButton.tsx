import { GoogleLogout } from 'react-google-login';
import { displayErrorMessage, displaySuccessMessage } from '../../lib/utils';
import { useDispatch } from 'react-redux';

export const LogoutButton = () => {
  const dispatch = useDispatch();
  const onSuccess = () => {
    dispatch({ type: 'LOGOUT' });
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
