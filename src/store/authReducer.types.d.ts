import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';

export enum AuthActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

export interface IAuthState {
  authData: null | GoogleLoginResponse | GoogleLoginResponseOffline;
}

interface ILoginAction {
  type: AuthActionTypes.LOGIN;
  payload: GoogleLoginResponse | GoogleLoginResponseOffline;
}

interface ILogoutAction {
  type: AuthActionTypes.LOGOUT;
}

export type AuthAction = ILoginAction | ILogoutAction;
