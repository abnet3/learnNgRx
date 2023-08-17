import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { authGuard } from './Guard/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'blog', component: BlogComponent, canActivate: [AuthGuard] },
  // { path: 'counter', component: CounterComponent, canActivate: [AuthGuard] }
  {
    path: 'blog',
    loadChildren: () => import('./component/blog/blog.module').then((m) => m.BlogModule),
    canActivate: [authGuard]
  },
  {
    path: 'counter',
    loadChildren: () => import('./component/counter/counter.module').then((m) => m.CounterModule),
    canActivate: [authGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./component/auth/auth.module').then((m) => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}