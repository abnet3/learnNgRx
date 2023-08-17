import * as fromAuth from './auth.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getAuthState = createFeatureSelector<fromAuth.AuthState>(
  fromAuth.authFeatureKey
);


export const isAuthenticated = createSelector(getAuthState, state => {
  return state.user? true: false;
})