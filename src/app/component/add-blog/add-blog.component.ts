import { FormBuilder, Validators } from '@angular/forms';

import { AppStateModel } from 'src/app/shared/store/Global/appstate.model';
import { BlogModel } from 'src/app/shared/store/Blog/Blog.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addBlog, updateBlog } from 'src/app/shared/store/Blog/Blog.actions';
import { getBlog } from 'src/app/shared/store/Blog/Blog.selectors';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  dialogTitle =''
  blogid = 0
  blogData!: BlogModel;

  isedit!: boolean;

constructor(private matdialog: MatDialogRef<AddBlogComponent>, private fb: FormBuilder, private store: Store<AppStateModel>, @Inject(MAT_DIALOG_DATA) public data: any){

}
  ngOnInit(): void {
    this.dialogTitle = this.data.title
      this.isedit = this.data.isedit;
    if(this.data.isedit){
      this.blogid = this.data.id;
      this.store.select(getBlog(this.data.id)).subscribe(data => {
        this.blogData  = data;
        this.blogForm.setValue({id: this.blogData.id, title: this.blogData.title, description: this.blogData.description})
      })
    }
    console.log(this.data);
  }


  close(){
     this.matdialog.close();
  }

  blogForm = this.fb.group({
      id: this.fb.control(0),
      title: this.fb.control('', Validators.required),
      description: this.fb.control('', Validators.required)
  })


  save() {

    if(this.blogForm.valid){
     const _blogInput: BlogModel= {

        id: 0,
        title: this.blogForm.value.title as string,
        description: this.blogForm.value.description as string

      }

      if(this.data.isedit){

         _blogInput.id = this.blogForm.value.id as number;
        this.store.dispatch(updateBlog({blogInput: _blogInput}))

      }else {
        this.store.dispatch(addBlog({blogInput: _blogInput}))

      }

      this.close()
    }
  }
}
