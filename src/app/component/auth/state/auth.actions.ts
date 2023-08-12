import { createAction, props } from "@ngrx/store"

import { LoginModel } from "./auth.model"

export const LOGIN_START = '[auth page] login start'
export const LOGIN_SUCCESS = '[auth page] login success'
export const LOGIN_FAILED = '[auth page] login failed'


export const loginStart = createAction(LOGIN_START, props<{loginData : LoginModel}>());

export const loginSucess = createAction(LOGIN_SUCCESS);

