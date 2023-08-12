import { createReducer, on } from '@ngrx/store';

export const authFeatureKey = 'auth';

export interface State {

}

export const initialState: State = {

};

export const _authreducer = createReducer(
  initialState,
 
);

// export const authFeature = createFeature({
//   name: authFeatureKey,
//   reducer,
// });

export function authReducer (state: any, action: any) {
  return _authreducer(state,action)
}
