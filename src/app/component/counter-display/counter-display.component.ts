import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { AppStateModel } from 'src/app/shared/store/Global/appstate.model';
import { CounterModel } from 'src/app/shared/store/counter.model';
import { Store } from '@ngrx/store';
import { getCounter } from 'src/app/shared/store/counter.select';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css'],
})
export class CounterDisplayComponent implements OnInit, OnDestroy {
  counterdisplay!: number;
  channelName = '';
  counterSubscription$!: Subscription;
  counter$!: Observable<CounterModel>;
  constructor(private store: Store<AppStateModel>) {}

  ngOnInit(): void {
    // this.counterSubscription$ = this.store
    //   .select('counter')
    //   .subscribe((data) => {
    //     console.log('channel counter');
    //     this.counterdisplay = data.counter;
    //     // this.channelName = data.channelName
    //   });
    // this.counter$ = this.store.select('counter');

    //apply feature selector

      this.counterSubscription$ = this.store.select(getCounter).subscribe(counter => {
                console.log('channel counter');
        this.counterdisplay = counter;
      })
  }

  ngOnDestroy(): void {
    if (this.counterSubscription$) {
      this.counterSubscription$.unsubscribe();
    }
  }
}
