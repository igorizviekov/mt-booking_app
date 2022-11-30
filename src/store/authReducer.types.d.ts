export enum AuthActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

export interface IAuthState {
  authData: null | any;
}

interface ILoginAction {
  type: AuthActionTypes.LOGIN;
  payload: any;
}

interface ILogoutAction {
  type: AuthActionTypes.LOGOUT;
}

export type AuthAction = ILoginAction | ILogoutAction;
