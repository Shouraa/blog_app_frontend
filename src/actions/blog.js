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

export const updateBlog = (blog) => {
  return async (dispatch) => {
    dispatch({
      type: UPDATE_BLOG_START,
    });
    try {
      const updatedBlog = await blogServices.update(blog, blog.id);
      dispatch({
        type: UPDATE_BLOG_SUCCESS,
        payload: { blog: updatedBlog },
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

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogServices.getAll();
    dispatch({
      type: INIT_BLOGS,
      payload: blogs,
    });
  };
};
