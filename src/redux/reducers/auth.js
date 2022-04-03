const initialState = {
  token: null,
  isError: false,
  errMsg: '',
  isLoading: false,
  signup: false,
  userData: {},
};
const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN': {
      return { ...state, token: action.payload };
    }
    case 'AUTH_SIGNUP': {
      state.signup = true;
      return { ...state };
    }
    case 'AUTH_LOGOUT': {
      return { ...initialState };
    }
    case 'AUTH_ERROR': {
      return { ...state, isError: true, errMsg: action.payload };
    }
    case 'CLEAR_ERROR': {
      return { ...state, isError: false, errMsg: '' };
    }
    case 'GET_PROFILE': {
      state.userData = action.payload;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default auth;
