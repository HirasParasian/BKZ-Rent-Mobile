const initialState = {
  token: null,
  isError: false,
  errMsg: '',
  isLoading: false,
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
    case 'LOGIN_PENDING': {
      state.isLoading = true;
      return { ...state };
    }
    case 'LOGIN_FULFILLED': {
      const { data } = action.payload;
      state.token = data.results.token;
      state.isLoading = false;
      state.isError = false;
      state.isAuthenticated = true;
      return { ...state };
    }
    case 'LOGIN_REJECTED': {
      const { data } = action.payload.response;
      state.isLoading = false;
      state.isError = true;
      state.errMessage = data.message;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default auth;
