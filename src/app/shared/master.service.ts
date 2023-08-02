import { Observable, tap } from 'rxjs';

import { BlogModel } from './store/Blog/Blog.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  hasAccess() {
    return true;
  }

  GetAllBlogs(): Observable<BlogModel[]>{
    return this.http.get<BlogModel[]>('http://localhost:3000/blogs');
  }

  AddBlog(data:BlogModel): Observable<BlogModel> {
    return this.http.post<BlogModel>('http://localhost:3000/blogs', data).pipe(
      tap(() => {
         return this.http.get<BlogModel>('http://localhost:3000/blogs?_limit=1&_sort=id&_order=desc')
      })
    );

  }

  UpdateBlog(data:BlogModel): Observable<BlogModel> {
    return this.http.put<BlogModel>('http://localhost:3000/blogs/'+data.id, data);

  }

  DeleteBlog(id:number): Observable<BlogModel> {
    return this.http.delete<BlogModel>('http://localhost:3000/blogs/' + id,);

  }
}
