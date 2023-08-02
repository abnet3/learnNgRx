import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import {
  LOAD_BLOG,
  addBlog,
  addBlogSuccess,
  deleteBlog,
  deleteBlogsuccess,
  loadblogerror,
  loadblogsucess,
  updateBlog,
  updateBlogsuccess,
} from './Blog.actions';
import { emptyalert, showalert } from '../Global/App.Action';

import { Injectable } from '@angular/core';
import { MasterService } from '../../master.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class BlogEffects {
  constructor(
    private action$: Actions,
    private service: MasterService,
    private _snackBar: MatSnackBar
  ) {}

  _addblog = createEffect(() =>
    this.action$.pipe(
      ofType(LOAD_BLOG),
      exhaustMap((action) => {
        return this.service.GetAllBlogs().pipe(
          map((data) => {
            console.log('effects' + data);
            return loadblogsucess({ bloglists: data });
          }),
          catchError((error) => of(loadblogerror({ errorMessage: error })))
        );
      })
    )
  );

  _createBlog = createEffect(() =>
    this.action$.pipe(
      ofType(addBlog),
      exhaustMap((action) => {
        return this.service.AddBlog(action.blogInput).pipe(
          map((data) => {
            return addBlogSuccess({ blogInput: data });
          }),
          catchError((error) => of(loadblogerror({ errorMessage: error })))
        );
      })
    )
  );

  //   _updateBlog = createEffect(()=>
  //   this.action$.pipe(
  //     ofType(updateBlog),
  //     exhaustMap((action) => {
  //       return this.service.UpdateBlog(action.blogInput).pipe(
  //         map(() => {
  //           return updateBlogsuccess({blogInput: action.blogInput})
  //         }),
  //         catchError((error)=> of(loadblogerror({errorMessage: error})))
  //       )
  //     })
  //   )
  // )

  _updateBlog = createEffect(() =>
    this.action$.pipe(
      ofType(updateBlog),
      switchMap((action) =>
        this.service.UpdateBlog(action.blogInput).pipe(
          switchMap((res) =>
            of(
              updateBlogsuccess({ blogInput: action.blogInput }),
              showalert({ message: 'Blog Updated', actionresult: 'pass' })
            )
          ),
          catchError((error) => of(showalert({ message: 'Update Failed' +  error, actionresult: 'fail' })))
        )
      )
    )
  );

  _deleteBlog = createEffect(() =>
    this.action$.pipe(
      ofType(deleteBlog),
      exhaustMap((action) => {
        return this.service.DeleteBlog(action.id).pipe(
          map(() => {
            return deleteBlogsuccess({ id: action.id });
          }),
          catchError((error) => of(loadblogerror({ errorMessage: error })))
        );
      })
    )
  )
    }
