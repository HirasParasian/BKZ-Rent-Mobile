import http from '../../helpers/http';
import qs from 'qs';

export const OnCreate = (
  name,
  price,
  description,
  location,
  category,
  stock,
) => {
  const dataa = {
    name: name,
    price: price,
    description: description,
    location: location,
    category: category,
    stock: stock,
  };
  return async dispatch => {
    try {
      dispatch({
        type: 'CLEAR_ERROR',
      });
      const { data } = await http().post('/vehicles', qs.stringify(dataa));
      console.log(data);
      dispatch({
        type: 'CREATE_VEHICLE',
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
        type: 'CREATE_ERROR',
        payload: payload,
      });
    }
  };
};
