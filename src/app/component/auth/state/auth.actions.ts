import { LoginModel, SignupModel } from "./auth.model"
import { createAction, props } from "@ngrx/store"

import { User } from "src/app/shared/models/user.model"

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login success';
export const LOGIN_FAILED = '[auth page] login failed';

export const SIGNUP_START = '[auth page] signup start';
export const SIGNUP_SUCCESS = '[auth page] signup success';

export const AUTO_LOGIN_ACTION = '[auth page] auto login';
export const LOGOUT_ACTION = '[auth page] logout';



export const loginStart = createAction(LOGIN_START, props<{loginData : LoginModel}>());

export const loginSucess = createAction(LOGIN_SUCCESS, props<{user: User | null; redirect:boolean}>()); // added redirect when i refresh the page so it stays on the currnent route and not go to '/'


export const signupStart = createAction(SIGNUP_START, props<{signupData : SignupModel}>());
export const signupSuccess = createAction(SIGNUP_SUCCESS, props<{user: User; redirect:boolean}>());

export const autologin = createAction(AUTO_LOGIN_ACTION);
export const logout = createAction(LOGOUT_ACTION);