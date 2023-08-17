import { Component, OnInit } from '@angular/core';

import { AppStateModel } from 'src/app/shared/store/Global/appstate.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { isAuthenticated } from '../auth/state/auth.selectors';
import { logout } from '../auth/state/auth.actions';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit{

  isAuthenticated$!: Observable<boolean>;

  constructor(private store: Store<AppStateModel>){}
  ngOnInit(): void {

    this.isAuthenticated$ = this.store.select(isAuthenticated);
  }


  onLogout(event: Event){

     event.preventDefault();

     this.store.dispatch(logout());

  }
}
