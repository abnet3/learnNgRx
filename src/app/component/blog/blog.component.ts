import { BlogModel, Blogs } from 'src/app/shared/store/Blog/Blog.model';
import { Component, OnInit } from '@angular/core';
import { deleteBlog, loadBlog } from 'src/app/shared/store/Blog/Blog.actions';

import { AddBlogComponent } from '../add-blog/add-blog.component';
import { AppStateModel } from 'src/app/shared/store/Global/appstate.model';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import {getBloginfo} from 'src/app/shared/store/Blog/Blog.selectors';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  // blogs$!: Observable<BlogModel>
  blogs!: BlogModel[];
  blogInfo!: Blogs;
  constructor(private store: Store<AppStateModel>, private dialog: MatDialog) {}
  ngOnInit(): void {
    //  this.blogs$ = this.store.select('blog');

    this.store.dispatch(loadBlog());

    this.store.select(getBloginfo).subscribe((blogs) => {
      // console.log(blogs);
      // this.blogs = blogs;

      this.blogInfo = blogs
    });
  }

  AddBlog() {
    this.openDialog(0, 'Add Blog');
  }

  openDialog(id: number, title: string, isedit = false) {
    this.dialog.open(AddBlogComponent, {
      width: '40%',
      data: {
        id: id,
        title: title,
        isedit: isedit,
      },
    });
  }

  onEdit(id: number) {
    console.log(id);
    this.openDialog(id, 'Edit Blog', true);
  }

  onDelete(id: number) {
    if (confirm('Are you sure you want to remove this blog?')) {
      this.store.dispatch(deleteBlog({ id }));
    }
  }

}
