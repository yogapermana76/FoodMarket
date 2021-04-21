const initHome = {
  foods: [],
};

export const homeReducer = (state = initHome, action) => {
  switch (action.type) {
    case 'SET_FOOD':
      return {
        ...state,
        foods: action.value,
      };
    default:
      return state;
  }
};
