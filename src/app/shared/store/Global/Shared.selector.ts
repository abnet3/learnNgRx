import { createFeatureSelector, createSelector } from "@ngrx/store"

import { SharedState } from "./Shared.state"

export const SHARED_STATE_NAME = 'shared'

const getSharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);


export const getLoading = createSelector(getSharedState, (state)=> {
  return state.showLoading;
})