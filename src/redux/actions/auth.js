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

export const OnRegister = (username, password, MobileNumber) => {
  const dataa = {
    username: username,
    password: password,
    MobileNumber: MobileNumber,
  };
  return async dispatch => {
    try {
      dispatch({
        type: 'CLEAR_ERROR',
      });
      const { data } = await http().post(
        '/users/register',
        qs.stringify(dataa),
      );
      console.log(data);
      dispatch({
        type: 'AUTH_SIGNUP',
        payload: data.results,
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

export const getProfile = token => {
  return async dispatch => {
    try {
      const { data } = await http(token).get('/profile');
      dispatch({
        type: 'GET_PROFILE',
        payload: data.results,
      });
    } catch (e) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: e.response.data.error[0],
      });
    }
  };
};
