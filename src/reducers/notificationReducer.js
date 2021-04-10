const notificationReducer = (
  state = { notification: '', type: 'success' },
  action
) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data;
    case 'REMOVE_NOTIFICATION':
      return '';
    default:
      return state;
  }
};

let timeoutID;

export const setNotification = (notification, delay) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: { notification, type: 'success' },
    });

    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => {
      dispatch({ type: 'REMOVE_NOTIFICATION' });
    }, delay * 1000);
  };
};

export const setError = (notification, delay) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: { notification, type: 'error' },
    });

    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => {
      dispatch({ type: 'REMOVE_NOTIFICATION' });
    }, delay * 1000);
  };
};

export default notificationReducer;
