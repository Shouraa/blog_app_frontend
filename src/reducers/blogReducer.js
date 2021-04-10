import blogServices from '../services/blogs';
import { setError, setNotification } from './notificationReducer';
import { initializeUsers } from './userReducer';

const initialState = [];

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return [...state, action.data];
    case 'REMOVE_BLOG':
      return state.filter((b) => b.id !== action.data.id);
    case 'UPDATE_BLOG':
      return state.map((b) =>
        b.id !== action.data.blog.id ? b : action.data.blog
      );
    case 'INIT_BLOGS':
      return action.data;
    default:
      return state;
  }
};

export const addBlog = (newObj) => {
  return async (dispatch) => {
    try {
      const blog = await blogServices.create(newObj);
      dispatch({
        type: 'ADD_BLOG',
        data: blog,
      });
      dispatch(setNotification('Blog was added', 5));
      dispatch(initializeUsers());
    } catch (err) {
      dispatch(setError(`Failed to create: ${err.message}`, 5));
    }
  };
};

export const removeBlog = (id) => {
  return async (dispatch) => {
    await blogServices.remove(id);
    dispatch({
      type: 'REMOVE_BLOG',
      data: { id },
    });
    dispatch(setNotification('Blog was removed', 5));
    dispatch(initializeUsers());
  };
};

export const updateBlog = (blog) => {
  return async (dispatch) => {
    const updatedBlog = await blogServices.update(blog, blog.id);
    dispatch({
      type: 'UPDATE_BLOG',
      data: { blog: updatedBlog },
    });
    dispatch(setNotification('Blog was updated', 5));
  };
};

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogServices.getAll();
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs,
    });
  };
};

export default blogReducer;
