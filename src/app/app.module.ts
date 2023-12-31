import { AppState, appReducer } from './shared/store/Global/app.state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';

import { AppComponent } from './app.component';
import { AppEffects } from './shared/store/Global/App.Effects';
import { AppRoutingModule } from './app-routing.module';
import { AuthEffects } from './component/auth/state/auth.effects';
import { BlogEffects } from './shared/store/Blog/Blog.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CustomHttpInterceptor } from './shared/Helpers/CustomHttp.interceptor';
import { EffectsModule } from '@ngrx/effects';
import { HomeComponent } from './component/home/home.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { MaterialModule } from './Material.Module';
import { MenuHeaderComponent } from './component/menu-header/menu-header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuHeaderComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    // EffectsModule.forRoot([BlogEffects, AppEffects])
        EffectsModule.forRoot([AuthEffects])

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true
    }
  ] , bootstrap: [AppComponent]
})
export class AppModule { }
