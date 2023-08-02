import { Actions, createEffect, ofType } from "@ngrx/effects";
import { emptyalert, showalert } from "./App.Action";
import { exhaustMap, map, pipe } from "rxjs";

import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()

export class AppEffects{

  constructor(private action$: Actions, private _snackBar: MatSnackBar){

  }


  _showAlert = createEffect(() =>
    this.action$.pipe(
      ofType(showalert),
      exhaustMap((action) => {
        return this.showSnacBarAlert(action.message, action.actionresult)
          .afterDismissed()
          .pipe(
            map(() => {
              return emptyalert();
            })
          );
      })
    )
  );

  showSnacBarAlert(message: string, actionresult:string) {

    let _class = actionresult == 'pass'? 'green-snackbar' : 'red-snackbar';
    return this._snackBar.open(message, 'OK', {
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: [_class],
      duration: 5000
    });
  }
}

