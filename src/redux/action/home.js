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

export const getFoodDataByTypes = type => dispatch => {
  axios
    .get(`${API_HOST.url}/food?${type}`)
    .then(res => {
      if (type === 'new_food') {
        dispatch({ type: 'SET_NEW_TASTE', value: res.data.data.data });
      } else if (type === 'popular') {
        dispatch({ type: 'SET_POPULAR', value: res.data.data.data });
      } else if (type === 'recommended') {
        dispatch({ type: 'SET_RECOMMENDED', value: res.data.data.data });
      }
    })
    .catch(err => {
      console.log(err);
    });
};
