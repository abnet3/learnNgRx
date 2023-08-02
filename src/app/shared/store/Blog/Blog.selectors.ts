import { BlogModel, Blogs } from "./Blog.model";
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getBlogstate = createFeatureSelector<Blogs>('blog');


export const getBlogLists = createSelector(getBlogstate, (state) => {
  return state.bloglists;
})

export const getBloginfo = createSelector(getBlogstate, (state) => {
  return state;
})

export const getBlog=(id:number) => createSelector(getBlogstate, (state) => {
  return state.bloglists.find((blog: BlogModel) => blog.id === id) as BlogModel
})