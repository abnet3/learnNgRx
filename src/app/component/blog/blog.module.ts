import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AddBlogComponent } from "../add-blog/add-blog.component";
import { AppState } from "src/app/shared/store/Global/app.state";
import { BLOG_FEATURE_KEY } from "src/app/shared/store/Blog/Blog.reducers";
import { BlogComponent } from "./blog.component";
import { BlogEffects } from "src/app/shared/store/Blog/Blog.effects";
import { CommonModule } from "@angular/common";
import { EffectsModule } from "@ngrx/effects";
import { MaterialModule } from "src/app/Material.Module";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

const routes: Routes = [
  {path: "", component: BlogComponent},

]

@NgModule({
  declarations: [
   BlogComponent,
   AddBlogComponent
  ],
  imports: [CommonModule, FormsModule,
    StoreModule.forFeature(BLOG_FEATURE_KEY, AppState.blog),
        EffectsModule.forFeature([BlogEffects]),
    ReactiveFormsModule, MaterialModule, RouterModule.forChild(routes)]

})


export class BlogModule {}