const initialState = {
  isError: false,
  errMsg: '',
  isLoading: false,
  myHistory: [],
  historyPage: {},
  successMsg: '',
  delete: '',
};
const history = (state = initialState, action) => {
  switch (action.type) {
    case 'CLEAR_ERROR_HISTORY': {
      return {
        ...state,
        isError: false,
        errMsg: '',
        successMsg: '',
        myHistory: [],
        historyPage: {},
      };
    }
    case 'GET_MY_HISTORY': {
      state.myHistory = action.payload.results;
      state.historyPage = action.payload.pageInfo;
      state.successMsg = action.payload.message;
      return { ...state };
    }
    case 'DELETE_HISTORY': {
      state.delete = action.payload.message;
      return { ...state };
    }
    case 'CLEAR_HISTORY': {
      state.myHistory = [];
      state.historyPage = {};
      return { ...state };
    }
    case 'HISTORY_ERROR': {
      return { ...state, isError: true, errMsg: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};

export default history;
