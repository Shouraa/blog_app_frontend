import {
  INIT_BLOGS,
  ADD_BLOG_START,
  ADD_BLOG_SUCCESS,
  ADD_BLOG_FAIL,
  REMOVE_BLOG_START,
  REMOVE_BLOG_SUCCESS,
  REMOVE_BLOG_FAIL,
  UPDATE_BLOG_START,
  UPDATE_BLOG_SUCCESS,
  UPDATE_BLOG_FAIL,
} from '../actions/blog';

const initialState = {
  blogLoader: false,
  blogError: null,
  blogs: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG_START:
      return {
        ...state,
        blogLoader: true,
      };
    case ADD_BLOG_SUCCESS:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
        blogLoader: false,
      };
    case ADD_BLOG_FAIL:
      return {
        ...state,
        blogError: action.payload,
        blogLoader: false,
      };
    case REMOVE_BLOG_START:
      return {
        ...state,
        blogLoader: true,
      };
    case REMOVE_BLOG_SUCCESS:
      return {
        ...state,
        blogs: state.blogs.filter((b) => b.id !== action.payload.id),
        blogError: false,
      };
    case REMOVE_BLOG_FAIL:
      return {
        ...state,
        blogError: action.payload,
        blogLoader: false,
      };
    case UPDATE_BLOG_START:
      return {
        ...state,
        blogLoader: true,
      };
    case UPDATE_BLOG_SUCCESS:
      return {
        ...state,
        blogs: state.map((b) =>
          b.id !== action.payload.blog.id ? b : action.payload.blog
        ),
        blogLoader: false,
      };
    case UPDATE_BLOG_FAIL:
      return {
        ...state,
        blogError: action.payload,
        blogLoader: false,
      };

    case INIT_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };
    default:
      return state;
  }
};

// export const addBlog = (newBlog) => {
//   return async (dispatch) => {
//     dispatch({
//       type: LOGIN_USER_START,
//     });
//     try {
//       const blog = await blogServices.create(newBlog);
//       dispatch({
//         type: ADD_BLOG_SUCCESS,
//         payload: blog,
//       });
//       dispatch(setNotification('Blog was added', 5));
//       dispatch(initializeUsers());
//     } catch (err) {
//       dispatch(setError(`Failed to create: ${err.message}`, 5));
//     }
//   };
// };

// export const removeBlog = (id) => {
//   return async (dispatch) => {
//     await blogServices.remove(id);
//     dispatch({
//       type: 'REMOVE_BLOG',
//       payload: { id },
//     });
//     dispatch(setNotification('Blog was removed', 5));
//     dispatch(initializeUsers());
//   };
// };

// export const updateBlog = (blog) => {
//   return async (dispatch) => {
//     const updatedBlog = await blogServices.update(blog, blog.id);
//     dispatch({
//       type: 'UPDATE_BLOG',
//       payload: { blog: updatedBlog },
//     });
//     dispatch(setNotification('Blog was updated', 5));
//   };
// };

// export const initializeBlogs = () => {
//   return async (dispatch) => {
//     const blogs = await blogServices.getAll();
//     dispatch({
//       type: 'INIT_BLOGS',
//       payload: blogs,
//     });
//   };
// };

export default blogReducer;
