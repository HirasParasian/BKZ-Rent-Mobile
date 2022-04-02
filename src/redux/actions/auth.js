export const AuthLogin = (username, password) => {
  return dispatch => {
    dispatch({
      type: 'CLEAR_ERROR',
    });
    if (username === 'admin' && password === 'admin') {
      dispatch({
        type: 'AUTH_LOGIN',
        payload: 'asdhaksjdhak',
      });
    } else {
      dispatch({
        type: 'AUTH_ERROR',
        payload: 'CANNOT LOGIN',
      });
    }
  };
};
