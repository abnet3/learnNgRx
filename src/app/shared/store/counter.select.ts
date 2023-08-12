import { createFeatureSelector, createSelector } from '@ngrx/store';

import { COUNTER_FEATURE_KEY } from './counter.reducer';
import { CounterModel } from './counter.model';

const getCounterstate = createFeatureSelector<CounterModel>(COUNTER_FEATURE_KEY);

export const getCounter = createSelector(getCounterstate, (state) => {
  return state.counter;
})

export const getChannelName = createSelector(getCounterstate, (state) => {
  return state.channelName;
})
