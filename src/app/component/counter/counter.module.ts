import { RouterModule, Routes } from '@angular/router';

import { AppState } from 'src/app/shared/store/Global/app.state';
import { COUNTER_FEATURE_KEY } from 'src/app/shared/store/counter.reducer';
import { CommonModule } from '@angular/common';
import { CounterButtonComponent } from '../counter-button/counter-button.component';
import { CounterComponent } from './counter.component';
import { CounterDisplayComponent } from '../counter-display/counter-display.component';
import { CustomCounterComponent } from '../custom-counter/custom-counter.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/Material.Module';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

const routes: Routes = [{ path: '', component: CounterComponent }];

@NgModule({
  declarations: [
    CounterComponent,
    CounterButtonComponent,
    CounterDisplayComponent,
    CustomCounterComponent,
  ],

  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(COUNTER_FEATURE_KEY, AppState.counter),
    MaterialModule,
    RouterModule.forChild(routes),
  ],
})
export class CounterModule {}
