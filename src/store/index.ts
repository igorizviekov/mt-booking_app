import { action, createStore } from 'easy-peasy';
import { IAuthModel } from './store.types';
import { persist } from 'easy-peasy';

export const store = createStore<IAuthModel>(
  persist(
    {
      auth: { authData: null },
      login: action((state, payload) => {
        state.auth.authData = payload;
      }),
      logout: action((state) => {
        state.auth.authData = null;
      }),
    },
    {
      storage: 'localStorage',
    },
  ),
);
