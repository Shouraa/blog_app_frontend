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
  LIKE_BLOG,
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
        blogs: state.blogs.map((b) =>
          b.id !== action.payload.id ? b : action.payload
        ),
        blogLoader: false,
      };
    case UPDATE_BLOG_FAIL:
      return {
        ...state,
        blogError: action.payload,
        blogLoader: false,
      };
    case LIKE_BLOG:
      return {
        ...state,
        blogs: state.blogs.map((b) =>
          b.id !== action.payload.id ? b : action.payload
        ),
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

export default blogReducer;
