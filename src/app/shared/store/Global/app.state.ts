import { SHARED_STATE_NAME } from './Shared.selector';
import { SharedReducer } from './app.reducer';
import { blogReducer } from '../Blog/Blog.reducers';
import { counterReducer } from '../counter.reducer';
import { initialState } from './Shared.state';

export const AppState = {
  counter: counterReducer,
  blog: blogReducer,

  [SHARED_STATE_NAME]: initialState

};


export const appReducer = {

  [SHARED_STATE_NAME]: SharedReducer

}