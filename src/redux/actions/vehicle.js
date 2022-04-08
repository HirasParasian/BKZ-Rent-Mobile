import http from '../../helpers/http';
import qs from 'qs';

export const OnCreate = (
  name,
  price,
  stock,
  description,
  location,
  category,
  token,
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
      const { data } = await http(token).post(
        '/vehicles/create',
        qs.stringify(dataa),
      );
      console.log(data);
      dispatch({
        type: 'CREATE_VEHICLE',
        payload: data.results,
      });
    } catch (err) {
      let payload = '';
      if (err.response) {
        payload = err.response.data.error;
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

export const getVehicle = () => {
  return async dispatch => {
    try {
      const { data } = await http().get('/vehicles');
      dispatch({
        type: 'GET_VEHICLE',
        payload: data.results,
      });
    } catch (e) {
      dispatch({
        type: 'VEHICLE_ERROR',
        payload: e.response.data.error[0],
      });
    }
  };
};

export const getBike = () => {
  return async dispatch => {
    try {
      const { data } = await http().get('/vehicles?category=1');
      dispatch({
        type: 'GET_BIKE',
        payload: data.results,
      });
    } catch (e) {
      dispatch({
        type: 'VEHICLE_ERROR',
        payload: e.response.data.error[0],
      });
    }
  };
};

export const getCar = () => {
  return async dispatch => {
    try {
      const { data } = await http().get('/vehicles?category=3');
      dispatch({
        type: 'GET_CAR',
        payload: data.results,
      });
    } catch (e) {
      dispatch({
        type: 'VEHICLE_ERROR',
        payload: e.response.data.error[0],
      });
    }
  };
};

export const getMotor = () => {
  return async dispatch => {
    try {
      const { data } = await http().get('/vehicles?category=2');
      dispatch({
        type: 'GET_MOTOR',
        payload: data.results,
      });
    } catch (e) {
      dispatch({
        type: 'VEHICLE_ERROR',
        payload: e.response.data.error[0],
      });
    }
  };
};

export const getDetailVehicle = vehicleId => {
  console.log(vehicleId);
  return async dispatch => {
    try {
      const { data } = await http().get(`/vehicles/search/${vehicleId}`);
      dispatch({
        type: 'GET_DETAIL_VEHICLE',
        payload: data.result,
      });
    } catch (e) {
      dispatch({
        type: 'VEHICLE_ERROR',
        payload: e.response.data.error[0],
      });
    }
  };
};

export const getSearch = (page, search, category) => {
  console.log('------------------' + page, search, category);
  return async dispatch => {
    try {
      const { data } = await http().get(
        `/vehicles?search=${search}&page=${page}&limit=10&category=${category}`,
      );
      dispatch({
        type: 'GET_SEARCH',
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: 'VEHICLE_ERROR',
        payload: 'Failed',
      });
    }
  };
};
