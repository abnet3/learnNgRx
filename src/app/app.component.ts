import { Component, OnInit, inject } from '@angular/core';

import { AppStateModel } from './shared/store/Global/appstate.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getLoading } from './shared/store/Global/Shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'learnNgRx';

  showLoading$!: Observable<boolean>;


  constructor(private store: Store<AppStateModel>){}

  ngOnInit(): void {
    this.showLoading$  = this.store.select(getLoading);
  }






}
