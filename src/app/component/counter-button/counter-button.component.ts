import {
  customrename,
  decrement,
  increment,
  reset,
} from 'src/app/shared/store/counter.actions';

import { Component } from '@angular/core';
import { CounterModel } from 'src/app/shared/store/counter.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css'],
})
export class CounterButtonComponent {
  constructor(private store: Store<{ counter: CounterModel }>) {}

  OnIncrement() {
    this.store.dispatch(increment());
  }

  OnDecrement() {
    this.store.dispatch(decrement());
  }

  OnReset() {
    this.store.dispatch(reset());
  }

  OnRename(){
    this.store.dispatch(customrename({channel: 'Welcome to Epic tech'}))
  }
}
