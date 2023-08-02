import { createAction, props } from "@ngrx/store";

import { BlogModel } from "./Blog.model";

export const LOAD_BLOG_SUCCESS = '[Blog page] load blog success'
export const LOAD_BLOG_ERROR = '[Blog page] load blog error'
export const ADD_BLOG_SUCCESS = '[Blog page] ADD blog success'
export const ADD_BLOG = '[Blog page] ADD blog'
export const LOAD_BLOG = '[Blog page] load blog'
export const UPDATE_BLOG = '[Blog page] Update blog'
export const UPDATE_BLOG_SUCCESS = '[Blog page] update blog success'
export const DELETE_BLOG = '[Blog page] Delete blog'
export const DELETE_BLOG_SUCCESS = '[Blog page] Delete blog success'


export const loadBlog = createAction(LOAD_BLOG);

export const loadblogsucess = createAction(LOAD_BLOG_SUCCESS, props<{bloglists: BlogModel[]}>())
export const loadblogerror = createAction(LOAD_BLOG_ERROR, props<{errorMessage:any}>())
export const addBlog = createAction(ADD_BLOG, props<{blogInput: BlogModel}>());

export const addBlogSuccess = createAction(ADD_BLOG_SUCCESS, props<{blogInput: BlogModel}>());

export const updateBlog = createAction(UPDATE_BLOG, props<{blogInput: BlogModel}>());
export const updateBlogsuccess = createAction(UPDATE_BLOG_SUCCESS, props<{blogInput: BlogModel}>());

export const deleteBlog = createAction(DELETE_BLOG, props<{id:number}>());
export const deleteBlogsuccess = createAction(DELETE_BLOG_SUCCESS, props<{id:number}>());