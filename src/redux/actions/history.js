import http from '../../helpers/http';
import qs from 'qs';

export const getMyHistory = (token, page) => {
  return async dispatch => {
    dispatch({
      type: 'CLEAR_ERROR_HISTORY',
    });
    try {
      const { data } = await http(token).get(`/myHistory?page=${page}`);
      dispatch({
        type: 'GET_MY_HISTORY',
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: 'HISTORY_ERROR',
        payload: e.response.data.message,
      });
    }
  };
};

export const getDetailHistory = historyId => {
  console.log(historyId);
  return async dispatch => {
    try {
      const { data } = await http().get(`/myHistory/search/${historyId}`);
      dispatch({
        type: 'GET_DETAIL_HISTORY',
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: 'DETAIL_HISTORY_ERROR',
        payload: e.response.data.error[0],
      });
    }
  };
};

export const deleteHistory = idHistory => {
  return async dispatch => {
    try {
      const { data } = await http().delete(`/myHistory/${idHistory}`);
      dispatch({
        type: 'DELETE_HISTORY',
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: 'HISTORY_ERROR',
        payload: e.response.data.error[0],
      });
    }
  };
};
