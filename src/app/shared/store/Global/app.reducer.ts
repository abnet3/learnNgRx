import { createReducer, on } from "@ngrx/store";

import { initialState } from "./Shared.state";
import { setLoadingSpinner } from "./App.Action";

const _sharedReducer = createReducer(initialState, on(setLoadingSpinner, (state,action)=> {
  return {
    ...state,
    showLoading: action.status
  }
}))



export function SharedReducer(state:any,action:any){

  return _sharedReducer(state,action);
}