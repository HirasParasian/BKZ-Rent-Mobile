import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from './auth';
import vehicle from './vehicle';
import transaction from './transaction';
import persistReducer from 'redux-persist/es/persistReducer';

const persistAuth = {
  key: 'auth',
  storage: AsyncStorage,
};
const persistVehicle = {
  key: 'vehicle',
  storage: AsyncStorage,
};
const persistTransaction = {
  key: 'transaction',
  storage: AsyncStorage,
};

const rootReducers = combineReducers({
  auth: persistReducer(persistAuth, auth),
  vehicle: persistReducer(persistVehicle, vehicle),
  transaction: persistReducer(persistTransaction, transaction),
});

export default rootReducers;
