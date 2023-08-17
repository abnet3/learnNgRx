import { createAction, props } from "@ngrx/store";

export const SHOW_ALERT = '[Blog] Show Alert';
export const EMPTY_ALERT = '[Blog] Empty Alert';
export const SET_LOADING_ACTION = '[shared state] set loading spinner';
export const SET_ERROR_MESSAGE = '[shared state] set error message';

export const showalert = createAction(SHOW_ALERT, props<{message : string, actionresult:string}>());
export const emptyalert = createAction(SHOW_ALERT);


export const setLoadingSpinner = createAction(SET_LOADING_ACTION, props<{status: boolean}>());
export const setErrorMessage = createAction(SET_ERROR_MESSAGE, props<{message: string}>());