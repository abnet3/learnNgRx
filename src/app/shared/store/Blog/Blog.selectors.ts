import { BlogModel, Blogs } from "./Blog.model";
import { createFeatureSelector, createSelector } from "@ngrx/store";

import { BLOG_FEATURE_KEY } from "./Blog.reducers";

const getBlogstate = createFeatureSelector<Blogs>(BLOG_FEATURE_KEY);


export const getBlogLists = createSelector(getBlogstate, (state) => {
  return state.bloglists;
})

export const getBloginfo = createSelector(getBlogstate, (state) => {
  return state;
})

export const getBlog=(id:number) => createSelector(getBlogstate, (state) => {
  return state.bloglists.find((blog: BlogModel) => blog.id === id) as BlogModel
})