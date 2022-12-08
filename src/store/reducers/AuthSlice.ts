import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthState {
  authData: null | any;
}

const initialState: IAuthState = {
  authData: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<null | any>) {
      state.authData = action.payload;
    },
    logout(state) {
      state.authData = null;
    },
  },
});

export default authSlice.reducer;
