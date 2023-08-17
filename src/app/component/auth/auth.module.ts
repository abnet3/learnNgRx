import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthEffects } from './state/auth.effects';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from 'src/app/Material.Module';
import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';

// import { Store, StoreModule } from '@ngrx/store';
// import { authFeatureKey, authReducer } from './state/auth.reducer';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    // StoreModule.forFeature(authFeatureKey, authReducer),
    // EffectsModule.forFeature([AuthEffects])
    EffectsModule.forFeature()

  ]
})
export class AuthModule { }
