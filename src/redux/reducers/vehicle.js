const initialState = {
  isError: false,
  errMsg: [],
  isLoading: false,
  createVehicle: false,
  allVehicle: [],
  bike: [],
  motor: [],
  car: [],
  detailVehicle: {},
};
const vehicle = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_VEHICLE': {
      state.createVehicle = true;
      return { ...state };
    }
    case 'GET_VEHICLE': {
      state.allVehicle = action.payload;
      return { ...state };
    }
    case 'GET_BIKE': {
      state.bike = action.payload;
      return { ...state };
    }
    case 'GET_MOTOR': {
      state.motor = action.payload;
      return { ...state };
    }
    case 'GET_CAR': {
      state.car = action.payload;
      return { ...state };
    }
    case 'GET_DETAIL_VEHICLE': {
      state.detailVehicle = action.payload;
      return { ...state };
    }
    case 'CLEAR_MESSAGE': {
      state.createVehicle = false;
      state.errMsg = [];
      state.isError = false;
      return { ...state };
    }
    case 'CREATE_ERROR': {
      return { ...state, isError: true, errMsg: action.payload };
    }
    case 'CLEAR_ERROR': {
      return { ...state, isError: false, errMsg: '' };
    }
    default: {
      return { ...state };
    }
  }
};

export default vehicle;
