import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './component/blog/blog.component';
import { CounterComponent } from './component/counter/counter.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { authGuard } from './Guard/auth.guard';

const routes: Routes = [

  {path: "", component: HomeComponent},
  {path: "blog", component: BlogComponent, canActivate: [authGuard]},
  {path: "counter", component: CounterComponent,  canActivate: [authGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
