const initStateRegister = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
};

export const registerReducer = (state = initStateRegister, action) => {
  switch (action.type) {
    case 'SET_REGISTER':
      return {
        ...state,
        name: action.value.name,
        email: action.value.email,
        password: action.value.password,
        password_confirmation: action.value.password,
      };
    default:
      return state;
  }
};
