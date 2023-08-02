import { addBlog, addBlogSuccess, deleteBlog, deleteBlogsuccess, loadBlog, loadblogerror, loadblogsucess, updateBlog, updateBlogsuccess } from './Blog.actions';
import { createReducer, on } from '@ngrx/store';

import { blogInitialState } from './Blog.state';

export const _blogReducer = createReducer(
  blogInitialState,

  on(loadBlog, (state) => {
    console.log(state);
    return {
      ...state,
    };
  }),

  on(loadblogsucess, (state, action)=> {

    console.log('reducer' + [...action.bloglists])
    return {

      ...state,
      bloglists: [...action.bloglists],
      ErrorMessage: ''

    }
  }),

  on(loadblogerror, (state, action)=> {

    console.log(action.errorMessage);
    return {

      ...state,
      bloglists: [],
      ErrorMessage: action.errorMessage.message

    }
  }),
  // on(addBlog, (state, action) => {
  //   const _blog = { ...action.blogInput };
  //   _blog.id = state.bloglists.length + 1;

  //   console.log(_blog);
  //   return {
  //     ...state,
  //     bloglists: [...state.bloglists, _blog],
  //   };
  // }),

    on(addBlogSuccess, (state, action) => {
    return {
      ...state,
      bloglists: [...state.bloglists, action.blogInput],
    };
  }),


  // on(updateBlog, (state, action) => {
  //   const _blog = { ...action.blogInput };

  //   const updateBlog = state.bloglists.map((blog) => {
  //     return _blog.id === blog.id ? _blog : blog;
  //   });

  //   return {
  //     ...state,
  //     bloglists: updateBlog,
  //   };
  // }),

  on(updateBlogsuccess, (state, action) => {
    const _blog = { ...action.blogInput };

    const updateBlog = state.bloglists.map((blog) => {
      return _blog.id === blog.id ? _blog : blog;
    });

    return {
      ...state,
      bloglists: updateBlog,
    };
  }),


  // on(deleteBlog, (state, action)=> {

  //   const updateBlog = state.bloglists.filter((data) => {
  //     return data.id !== action.id
  //   })
  //   return {
  //      ...state,
  //      bloglists: updateBlog

  //   }
  // })

  on(deleteBlogsuccess, (state, action)=> {

    const updateBlog = state.bloglists.filter((data) => {
      return data.id !== action.id
    })
    return {
       ...state,
       bloglists: updateBlog

    }
  })
);

export function blogReducer(state: any, action: any) {
  return _blogReducer(state, action);
}
