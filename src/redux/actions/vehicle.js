import http from '../../helpers/http';
import qs from 'qs';
import RNFetchBlob from 'rn-fetch-blob';

export const addVehicles = (token, newData) => {
  return async dispatch => {
    try {
      console.log(newData);
      const { data } = await RNFetchBlob.fetch(
        'POST',
        'http://192.168.100.8:5000/vehicles/create',
        {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
        [
          newData.picture
            ? {
                name: 'image',
                filename: newData.fileName,
                type: newData.fileType,
                data: RNFetchBlob.wrap(newData.picture),
              }
            : {},
          { name: 'name', data: newData.name },
          { name: 'price', data: newData.price },
          { name: 'stock', data: newData.stock },
          { name: 'description', data: newData.description },
          { name: 'location', data: newData.location },
          { name: 'category', data: newData.category },
        ],
      );
      dispatch({
        type: 'CREATE_VEHICLES',
        payload: JSON.parse(data),
      });
      dispatch({
        type: 'IS_LOADING',
      });
    } catch (e) {
      dispatch({
        type: 'VEHICLES_ERROR',
        payload: e,
      });
    }
  };
};

export const editVehicles = (token, newData, vehicleId) => {
  console.log(token, newData, vehicleId);
  return async dispatch => {
    try {
      // console.log(newData);
      const { data } = await RNFetchBlob.fetch(
        'PATCH',
        `http://192.168.100.8:5000/vehicles/edit/${vehicleId}`,
        {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
        [
          newData.picture
            ? {
                name: 'image',
                filename: newData.fileName,
                type: newData.fileType,
                data: RNFetchBlob.wrap(newData.picture),
              }
            : {},
          { name: 'name', data: newData.name },
          { name: 'price', data: newData.price.toString() },
          { name: 'stock', data: newData.stock.toString() },
          { name: 'description', data: newData.description },
          { name: 'location', data: newData.location },
          { name: 'category', data: newData.category.toString() },
        ],
      );
      dispatch({
        type: 'EDIT_VEHICLES',
        payload: JSON.parse(data),
      });
      dispatch({
        type: 'IS_LOADING',
      });
    } catch (e) {
      dispatch({
        type: 'VEHICLES_ERROR',
        payload: e,
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

export const getSearch = (page, search) => {
  console.log('------------------' + page, search);
  return async dispatch => {
    try {
      const { data } = await http().get(
        `/vehicles?search=${search}&page=${page}&limit=10`,
      );
      dispatch({
        type: 'GET_SEARCH',
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: 'VEHICLE_ERROR',
        payload: e.response.message,
      });
    }
  };
};

export const getFilter = (
  page,
  location,
  sort,
  minPrice,
  maxPrice,
  category,
  search,
) => {
  console.log(
    '------------------' + page,
    location,
    sort,
    minPrice,
    maxPrice,
    category,
    search,
  );
  return async dispatch => {
    try {
      const { data } = await http().get(
        `/vehicles?search=${search}&page=${page}
        &limit=10&category=${category}&sort=${sort}
        &location=${location}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
      );
      dispatch({
        type: 'GET_SEARCH',
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: 'VEHICLE_ERROR',
        payload: e.response.data.message,
      });
    }
  };
};
