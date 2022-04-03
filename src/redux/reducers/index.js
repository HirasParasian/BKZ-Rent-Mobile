import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from './auth';
import vehicle from './vehicle';
import persistReducer from 'redux-persist/es/persistReducer';

const persistAuth = {
  key: 'auth',
  storage: AsyncStorage,
};
const persistVehicle = {
  key: 'vehicle',
  storage: AsyncStorage,
};

const rootReducers = combineReducers({
  auth: persistReducer(persistAuth, auth),
  vehicle: persistReducer(persistAuth, vehicle),
});

export default rootReducers;
