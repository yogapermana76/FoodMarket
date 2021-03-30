const initGlobalState = {
  isError: false,
  message: 'Error',
  isLoading: false,
};

export const globalReducer = (state = initGlobalState, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        isError: action.value.isError,
        message: action.value.message,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.value,
      };
    default:
      return state;
  }
};
