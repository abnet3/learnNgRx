import { Component, OnInit } from '@angular/core';

import { CounterModel } from 'src/app/shared/store/counter.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css'],
})
export class CounterDisplayComponent implements OnInit {
  counterdisplay!: number;
  channelName = '';
  constructor(private store: Store<{ counter: CounterModel }>) {}
  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      this.counterdisplay = data.counter;
      this.channelName = data.channelName
    });

  }
}
