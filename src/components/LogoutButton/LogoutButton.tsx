import { GoogleLogout } from 'react-google-login';
import { displayErrorMessage, displaySuccessMessage } from '../../lib/utils';
import { useAppDispatch } from '../../store/hooks';
import { authSlice } from '../../store/reducers/AuthSlice';

export const LogoutButton = () => {
  const { logout } = authSlice.actions;
  const dispatch = useAppDispatch();
  const onSuccess = () => {
    dispatch(logout());
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
