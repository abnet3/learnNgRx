import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable, of } from 'rxjs';
import { LOGIN_SUCCESS, loginStart, loginSucess } from './auth.actions';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  mergeMap,
} from 'rxjs/operators';

import { AppStateModel } from 'src/app/shared/store/Global/appstate.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Injectable } from '@angular/core';
import { LoginModel } from './auth.model';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from 'src/app/shared/store/Global/App.Action';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private store: Store<AppStateModel>) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        let email = action.loginData.email;
        let password = action.loginData.password;

      return this.authService.login(email, password).pipe(
        map((data) => {
          console.log(data);

          this.store.dispatch(setLoadingSpinner({status: false}));
          const user = this.authService.formatUser(data);
          return loginSucess({user: user});
        })
      );
      })
    );
  });
}
