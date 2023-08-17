import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { loginStart, signupStart } from '../state/auth.actions';

import { AppStateModel } from 'src/app/shared/store/Global/appstate.model';
import { SignupModel } from '../state/auth.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private store: Store<AppStateModel>) {}

  Roles: any = ['Admin', 'Author', 'Reader'];
  signUpForm!: FormGroup;

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSignUpSubmit() {
    if (!this.signUpForm.valid) {
      return;
    }

    const signupinfo: SignupModel = {
      email: this.signUpForm.value.email as string,
      password: this.signUpForm.value.password as string,
    };

    this.store.dispatch(signupStart({ signupData: signupinfo }));
  }
}
