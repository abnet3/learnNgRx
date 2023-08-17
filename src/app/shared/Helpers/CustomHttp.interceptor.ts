import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { setErrorMessage, setLoadingSpinner } from '../store/Global/App.Action';

import { AppStateModel } from '../store/Global/appstate.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getErrorMessage } from '../store/Global/Shared.selector';
import { tap } from 'rxjs/operators';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  constructor(
    private store: Store<AppStateModel>,
    public snackBar: MatSnackBar
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.store.dispatch(setLoadingSpinner({ status: true })); // Dispatch loading action

    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.store.dispatch(setLoadingSpinner({ status: false })); // Dispatch success action
          }
        },
        (error: any) => {
          this.store.dispatch(setLoadingSpinner({ status: false })); // Dispatch falire action
          console.log(error);
          console.log(error.error.error.message);
          const errorMessage = this.formatErrorMessage(
            error.error.error.message
          );

          this.store.dispatch(setErrorMessage({ message: errorMessage }));
          this.openSnackBar(errorMessage, 'Close', 'red-snackbar');
        }
      )
    );
  }

  openSnackBar(message: string, action: string, className: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: [className],
    });
  }

  formatErrorMessage(error: string) {
    switch (error) {
      case 'EMAIL_NOT_FOUND':
        return 'Email Not Found';

      case 'INVALID_PASSWORD':
        return 'Invalid Password';

        case 'EMAIL_EXISTS':
          return 'Email already exists';

      default:
        return 'Unknown Error. Please try again.';
    }
  }
}
