const initGlobalState = {
  isError: false,
  message: 'Error',
};

export const globalReducer = (state = initGlobalState, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        isError: action.value.isError,
        message: action.value.message,
      };
    default:
      return state;
  }
};
