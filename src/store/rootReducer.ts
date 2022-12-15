import { combineReducers } from 'redux';
import { authReducer } from './reducers/authReducer';
import { geocodingReducer } from './reducers/geocodingReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  geocoding: geocodingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
