import { createReducer, on } from '@ngrx/store';
import {
  customincrement,
  customrename,
  decrement,
  increment,
  reset,
} from './counter.actions';

import { initialState } from './counter.state';

export const COUNTER_FEATURE_KEY = 'counter';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),

  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),

  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),

  on(customincrement, (state, action) => {
    console.log('Action:', action);
    console.log('Action Type:', action.type);
    console.log('Action Value:', action.value);
    console.log(state);
    console.log('Current Counter:', state.counter);

    const updatedCounter =
      action.action === 'add'
        ? state.counter + Number(action.value)
        : state.counter - Number(action.value);

    console.log('Updated Counter:', updatedCounter);

    return {
      ...state,
      counter:
        action.action === 'add'
          ? state.counter + Number(action.value)
          : state.counter - Number(action.value),
    };
  }),

  on(customrename, (state, action) => {

    console.log("custom rename state" + state);
    console.log("custom renameaction" + action)
    return {
      ...state,
      channelName: action.channel,
    };
  })
);
export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
