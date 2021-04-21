const initHome = {
  foods: [],
  newTaste: [],
  popular: [],
  recommended: [],
};

export const homeReducer = (state = initHome, action) => {
  switch (action.type) {
    case 'SET_FOOD':
      return {
        ...state,
        foods: action.value,
      };
    case 'SET_NEW_TASTE':
      return {
        ...state,
        newTaste: action.value,
      };
    case 'SET_POPULAR':
      return {
        ...state,
        popular: action.value,
      };
    case 'SET_RECOMMENDED':
      return {
        ...state,
        recommended: action.value,
      };
    default:
      return state;
  }
};
