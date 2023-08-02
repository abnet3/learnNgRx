import { createAction, props } from "@ngrx/store";

export const SHOW_ALERT = '[Blog] Show Alert';
export const EMPTY_ALERT = '[Blog] Empty Alert';

export const showalert = createAction(SHOW_ALERT, props<{message : string, actionresult:string}>());
export const emptyalert = createAction(SHOW_ALERT);