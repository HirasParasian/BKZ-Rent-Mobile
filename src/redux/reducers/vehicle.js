const initialState = {
  token: null,
  isError: false,
  errMsg: '',
  isLoading: false,
  createVehicle: false,
};
const vehicle = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_VEHICLE': {
      state.createVehicle = true;
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
