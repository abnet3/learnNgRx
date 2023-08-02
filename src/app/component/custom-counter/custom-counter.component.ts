import { Component, OnInit } from '@angular/core';

import { AppStateModel } from 'src/app/shared/store/Global/appstate.model';
import { CounterModel } from 'src/app/shared/store/counter.model';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { customincrement } from 'src/app/shared/store/counter.actions';
import { getChannelName } from 'src/app/shared/store/counter.select';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css'],
})
export class CustomCounterComponent implements OnInit {
  counterinput!: number;
  actionType = 'add';
  channelName = '';

  counterSubscription!: Subscription;
  constructor(private store: Store<AppStateModel>) {}

  ngOnInit(): void {

    // this.counterSubscription = this.store.select('counter').subscribe(counter => {

    //   console.log('channel name');
    //   this.channelName = counter.channelName;
    // })

    //implement feature selector


    this.counterSubscription = this.store.select(getChannelName).subscribe(channelName => {

      console.log('channel name');
      this.channelName = channelName;
    })

  }

  customIncrement() {
    if (this.counterinput !== undefined) {
      this.store.dispatch(
        customincrement({ value: this.counterinput, action: this.actionType })
      );
    } else {
      alert('please insert an input value');
    }
  }
}
