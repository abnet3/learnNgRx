import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, isDevMode } from '@angular/core';

import { AddBlogComponent } from './component/add-blog/add-blog.component';
import { AppComponent } from './app.component';
import { AppEffects } from './shared/store/Global/App.Effects';
import { AppRoutingModule } from './app-routing.module';
import { AppState } from './shared/store/Global/app.state';
import { BlogComponent } from './component/blog/blog.component';
import { BlogEffects } from './shared/store/Blog/Blog.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CounterButtonComponent } from './component/counter-button/counter-button.component';
import { CounterComponent } from './component/counter/counter.component';
import { CounterDisplayComponent } from './component/counter-display/counter-display.component';
import { CustomCounterComponent } from './component/custom-counter/custom-counter.component';
import { EffectsModule } from '@ngrx/effects';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './Material.Module';
import { MenuHeaderComponent } from './component/menu-header/menu-header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    CounterButtonComponent,
    CounterDisplayComponent,
    CustomCounterComponent,
    HomeComponent,
    BlogComponent,
    CounterComponent,
    MenuHeaderComponent,
    AddBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(AppState),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([BlogEffects, AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
