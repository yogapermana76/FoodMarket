import axios from 'axios';
import { API_HOST } from '../../config';

export const getFoodData = () => dispatch => {
  axios
    .get(`${API_HOST.url}/food`)
    .then(res => {
      dispatch({ type: 'SET_FOOD', value: res.data.data.data });
    })
    .catch(err => {
      console.log(err);
    });
};
