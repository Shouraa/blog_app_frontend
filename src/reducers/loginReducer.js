import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
} from '../actions/login';

const initialState = {
  userLoader: false,
  userError: null,
  user: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_START:
      return {
        ...state,
        userLoader: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        user: action.payload,
        userLoader: false,
        userError: null,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        userError: action.payload,
        userLoader: false,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
