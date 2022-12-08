import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

export const selectAuthData = (state: RootState) => state.auth.authData;

export const selectAuthedUserName = createSelector(
  [selectAuthData],
  (authData) => authData,
);
