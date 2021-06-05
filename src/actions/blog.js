import blogServices from '../services/blogs';
import { setError, setNotification } from '../reducers/notificationReducer';
import { initializeUsers } from '../reducers/userReducer';

export const INIT_BLOGS = 'INIT_BLOGS';

export const ADD_BLOG_START = 'ADD_BLOG_START';
export const ADD_BLOG_SUCCESS = 'ADD_BLOG_SUCCESS';
export const ADD_BLOG_FAIL = 'ADD_BLOG_FAIL';

export const REMOVE_BLOG_START = 'REMOVE_BLOG_START';
export const REMOVE_BLOG_SUCCESS = 'REMOVE_BLOG_SUCCESS';
export const REMOVE_BLOG_FAIL = 'REMOVE_BLOG_FAIL';

export const UPDATE_BLOG_START = 'UPDATE_BLOG_START';
export const UPDATE_BLOG_SUCCESS = 'UPDATE_BLOG_SUCCESS';
export const UPDATE_BLOG_FAIL = 'UPDATE_BLOG_FAIL';

export const LIKE_BLOG = 'LIKE_BLOG';

export const addBlog = (newBlog) => {
  return async (dispatch) => {
    dispatch({
      type: ADD_BLOG_START,
    });
    try {
      const blog = await blogServices.create(newBlog);
      console.log('blog', blog);
      dispatch({
        type: ADD_BLOG_SUCCESS,
        payload: blog,
      });
      dispatch(setNotification('Blog was added', 5));
      dispatch(initializeUsers());
    } catch (error) {
      dispatch({
        type: ADD_BLOG_FAIL,
        payload: error.message,
      });
      dispatch(setError(`Failed to create: ${error.message}`, 5));
    }
  };
};

export const removeBlog = (id) => {
  return async (dispatch) => {
    dispatch({
      type: REMOVE_BLOG_START,
    });
    try {
      await blogServices.remove(id);
      dispatch({
        type: REMOVE_BLOG_SUCCESS,
        payload: { id },
      });
      dispatch(setNotification('Blog was removed', 5));
      dispatch(initializeUsers());
    } catch (error) {
      dispatch({
        type: ADD_BLOG_FAIL,
        payload: error.message,
      });
    }
  };
};

export const updateBlog = (id, blog) => {
  return async (dispatch) => {
    dispatch({
      type: UPDATE_BLOG_START,
    });
    try {
      const data = await blogServices.update(id, blog);
      console.log(data);
      dispatch({
        type: UPDATE_BLOG_SUCCESS,
        payload: data,
      });
      dispatch(setNotification('Blog was updated', 5));
    } catch (error) {
      dispatch({
        type: UPDATE_BLOG_FAIL,
        payload: error.message,
      });
    }
  };
};

export const likeBlog = (id) => {
  return async (dispatch) => {
    try {
      const data = await blogServices.like(id);
      console.log(data);
      dispatch({
        type: LIKE_BLOG,
        payload: data,
      });
      dispatch(setNotification('Blog was liked', 5));
    } catch (error) {
      console.log(error);
    }
  };
};

export const initializeBlogs = () => {
  return async (dispatch) => {
    try {
      const blogs = await blogServices.getAll();
      dispatch({
        type: INIT_BLOGS,
        payload: blogs,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
