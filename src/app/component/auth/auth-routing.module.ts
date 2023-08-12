import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

const routes: Routes = [

  {
    path: '',
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' }, // Add pathMatch: 'full'
      { path: 'login', component: LoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }