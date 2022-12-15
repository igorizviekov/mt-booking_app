import {
  IAuthState,
  AuthAction,
  AuthActionTypes,
} from '../types/authReducer.types.d';

const initialState = {
  authData: null,
};

export const authReducer = (
  state: IAuthState = initialState,
  action: AuthAction,
): IAuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return { ...state, authData: action.payload };
    case AuthActionTypes.LOGOUT:
      return { ...state, authData: null };
    default:
      return state;
  }
};
