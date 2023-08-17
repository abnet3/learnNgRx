import { Actions, createEffect, ofType } from '@ngrx/effects';
import { autologin, loginStart, loginSucess, logout, signupStart, signupSuccess } from './auth.actions';
import {
  exhaustMap,
  map,
  mergeMap,
  tap,
} from 'rxjs/operators';

import { AppStateModel } from 'src/app/shared/store/Global/appstate.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private store: Store<AppStateModel>, private router: Router) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        let email = action.loginData.email;
        let password = action.loginData.password;

      return this.authService.login(email, password).pipe(
        map((data) => {
          console.log(data);
          const user = this.authService.formatUser(data);
          this.authService.setUserinLocalStorage(user);
          return loginSucess({user: user, redirect: true}) // added redirect when i refresh the page so it stays on the currnent route and not go to '/'
        })
      );
      })
    );
  });




  signUp$ = createEffect(()=> {
  return  this.actions$.pipe(ofType(signupStart),
         exhaustMap((action) => {
          let email = action.signupData.email;
          let password = action.signupData.password;
           return this.authService.signup(email,password).pipe(
            map((data)=> {
            const user = this.authService.formatUser(data);
            this.authService.setUserinLocalStorage(user);
            return signupSuccess({user: user, redirect: true});
           })
           );
         })
    );
  });



  // signUpRedirect$ = createEffect(()=> {
  //   return this.actions$.pipe(ofType(signupSuccess), tap((action) => {
  //     this.router.navigate(['/']);
  //   }))
  // }, {dispatch: false});


  loginRedirect$ = createEffect(()=> {
    return this.actions$.pipe(ofType(...[loginSucess, signupSuccess]), tap((action) => {

      if(action.redirect){
      this.router.navigate(['/']);
      }
    }))
  }, {dispatch: false});

  autologin$ = createEffect(()=> {
    return  this.actions$.pipe(ofType(autologin),
           mergeMap((action) => {
              const user =  this.authService.getUserFromLocalStorage();
              console.log(user);
              return of(loginSucess({user: user, redirect: false}))  // added redirect when i refresh the page so it stays on the currnent route and not go to '/'
           })
      );
    });


  logout$ = createEffect(()=> {
    return  this.actions$.pipe(ofType(logout),
           map((action) => {
              const user =  this.authService.logout();
              this.router.navigate(['auth/login']);
              console.log(user);

           })
      );
    }, {dispatch:false});
}
