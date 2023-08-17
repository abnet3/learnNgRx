import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AppStateModel } from 'src/app/shared/store/Global/appstate.model';
import { LoginModel } from '../state/auth.model';
import { Store } from '@ngrx/store';
import { loginStart } from '../state/auth.actions';
import { setLoadingSpinner } from 'src/app/shared/store/Global/App.Action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private store: Store<AppStateModel>){}

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {

   const logininfo: LoginModel = {
      email: this.form.value.email as string,
      password: this.form.value.password as string
   }

        this.store.dispatch(loginStart({loginData: logininfo}));

    }
  }

}