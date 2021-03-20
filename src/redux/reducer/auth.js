const initStateRegister = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  address: '',
  city: '',
  houseNumber: '',
  phoneNumber: '',
};

export const registerReducer = (state = initStateRegister, action) => {
  switch (action.type) {
    case 'SET_REGISTER':
      return {
        ...state,
        name: state.value.name,
        email: state.value.email,
        password: state.value.password,
        password_confirmation: state.value.password_confirmation,
      };
    case 'SET_ADDRESS':
      return {
        ...state,
        address: state.value.address,
        city: state.value.city,
        houseNumber: state.value.houseNumber,
        phoneNumber: state.value.phoneNumber,
      };
  }
  return state;
};
