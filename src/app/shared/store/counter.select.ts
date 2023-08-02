import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CounterModel } from './counter.model';

const getCounterstate = createFeatureSelector<CounterModel>('counter');

export const getCounter = createSelector(getCounterstate, (state) => {
  return state.counter;
})

export const getChannelName = createSelector(getCounterstate, (state) => {
  return state.channelName;
})
