import { createReducer, on } from '@ngrx/store';
import { loginSucess, logout, signupSuccess } from './auth.actions';

import { User } from 'src/app/shared/models/user.model';

export const authFeatureKey = 'auth';

export interface AuthState {

  user: User | null;

}

export const authinitialState: AuthState = {

  user:null

};

export const _authreducer = createReducer(
  authinitialState,
   on(loginSucess, (state, action) => {
    console.log(action.user)
    return {
      ...state,
      user: action.user
    }
   }),

   on(signupSuccess, (state, action) => {
    console.log(action.user)
    return {
      ...state,
      user: action.user
    }
   }),

   on(logout, (state) => {
    return {
      ...state,
      user: null
    }
   })

);

// export const authFeature = createFeature({
//   name: authFeatureKey,
//   reducer,
// });

export function authReducer (state: any, action: any) {
  return _authreducer(state,action)
}
