const initialState = {
  token: null,
  isError: false,
  errMsg: '',
};
const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN': {
      return { ...state, token: action.payload };
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
    default: {
      return { ...state };
    }
  }
};

export default auth;
