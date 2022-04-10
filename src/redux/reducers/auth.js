const initialState = {
  token: null,
  isError: false,
  favError: false,
  errMsg: '',
  isLoading: false,
  signup: false,
  userData: {},
  favoriteId: [],
  myFavorite: [],
  updateProfile: false,
  forgot: false,
  successMsg: '',
  pageFavorite: {},
};
const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN': {
      return { ...state, token: action.payload };
    }
    case 'AUTH_FORGOT': {
      state.forgot = true;
      return { ...state, successMsg: action.payload };
    }
    case 'AUTH_SIGNUP': {
      state.signup = true;
      return { ...state, successMsg: action.payload };
    }
    case 'UPDATE_PROFILE': {
      state.updateProfile = true;
      return { ...state, successMsg: action.payload };
    }
    case 'AUTH_LOGOUT': {
      return { ...initialState };
    }
    case 'AUTH_ERROR': {
      return { ...state, isError: true, errMsg: action.payload };
    }
    case 'CLEAR_ERROR': {
      return {
        ...state,
        isError: false,
        errMsg: '',
        successMsg: '',
        updateProfile: false,
      };
    }
    case 'GET_PROFILE': {
      state.userData = action.payload;
      return { ...state };
    }
    case 'GET_MY_FAVORITE': {
      state.myFavorite = action.payload.results;
      state.pageFavorite = action.payload.pageInfo;
      return { ...state };
    }
    case 'CLEAR_FAVORITE': {
      state.myFavorite = [];
      state.pageFavorite = {};
      return { ...state };
    }
    case 'GET_FAVORITE_ID': {
      state.favoriteId = action.payload;
      return { ...state };
    }
    case 'CLEAR_UPDATE_MESSAGE': {
      state.updateProfile = false;
      state.successMsg = '';
      return { ...state };
    }
    case 'CLEAR_FORGOT_MESSAGE': {
      state.forgot = false;
      state.successMsg = '';
      return { ...state };
    }
    case 'CLEAR_SIGNUP_MESSAGE': {
      state.signup = false;
      state.successMsg = '';
      state.errMsg = '';

      return { ...state };
    }
    case 'FAVORITE_ERROR': {
      return { ...state, favError: true, errMsg: action.payload };
    }
    case 'CLEAR_ERROR_FAVORITE': {
      return { ...state, favError: false, errMsg: '', successMsg: '' };
    }
    default: {
      return { ...state };
    }
  }
};

export default auth;
