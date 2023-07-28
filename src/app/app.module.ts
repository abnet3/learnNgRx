import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CounterButtonComponent } from './component/counter-button/counter-button.component';
import { CounterDisplayComponent } from './component/counter-display/counter-display.component';
import { CustomCounterComponent } from './component/custom-counter/custom-counter.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './Material.Module';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/store/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterButtonComponent,
    CounterDisplayComponent,
    CustomCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counter:counterReducer}, {}),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
