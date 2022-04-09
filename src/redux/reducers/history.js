const initialState = {
  isError: false,
  errMsg: '',
  isLoading: false,
  myHistory: [],
  historyPage: {},
  successMsg: '',
};
const history = (state = initialState, action) => {
  switch (action.type) {
    case 'CLEAR_ERROR_HISTORY': {
      return { ...state, isError: false, errMsg: '', successMsg: '' };
    }
    case 'GET_MY_HISTORY': {
      state.myHistory = action.payload.results;
      state.historyPage = action.payload.pageInfo;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default history;
