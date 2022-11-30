import { Action } from 'easy-peasy';

export interface IUserData {
  authData: any | null;
}

export interface IAuthModel {
  auth: IUserData;
  login: Action<IAuthModel, IUserData>;
  logout: Action<IAuthModel>;
}
