import { createReducer, on } from '@ngrx/store';

import { User } from 'src/app/shared/models/user.model';
import { loginSucess } from './auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {

  user: User | null;

}

export const initialState: AuthState = {

  user:null

};

export const _authreducer = createReducer(
  initialState,
   on(loginSucess, (state, action) => {
    console.log(action.user)
    return {
      ...state,
      user: action.user
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
