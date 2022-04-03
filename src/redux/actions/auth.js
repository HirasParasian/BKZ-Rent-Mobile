import http from '../../helpers/http';
import qs from 'qs';

export const loginProcess = (username, password) => {
  const dataa = { username: username, password: password };
  return async dispatch => {
    try {
      dispatch({
        type: 'CLEAR_ERROR',
      });
      const { data } = await http().post('/auth/login', qs.stringify(dataa));
      dispatch({
        type: 'AUTH_LOGIN',
        payload: data.results.token,
      });
    } catch (err) {
      let payload = '';
      if (err.response) {
        payload = err.response.data.message;
      } else {
        payload = err.message;
      }
      dispatch({
        type: 'AUTH_ERROR',
        payload: payload,
      });
    }
  };
};
