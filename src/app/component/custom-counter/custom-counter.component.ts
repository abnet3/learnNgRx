import { Component } from '@angular/core';
import { CounterModel } from 'src/app/shared/store/counter.model';
import { Store } from '@ngrx/store';
import { customincrement } from 'src/app/shared/store/counter.actions';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent {

  constructor(private store: Store<{counter: CounterModel}>){

  }

  counterinput!: number;
  actionType = 'add';

  customIncrement()
  {
    if(this.counterinput !== undefined){
    this.store.dispatch(customincrement({value: this.counterinput, action: this.actionType}))
    }
    else {
      alert("please insert an input value")
    }
  }

}
