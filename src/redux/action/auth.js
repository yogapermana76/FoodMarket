import axios from 'axios';
import { showMessage, storeData } from '../../utils';
import { setLoading } from './global';

const API_HOST = {
  url: 'http://foodmarket-backend.buildwithangga.id/api',
};

export const signUpAction = (
  dataRegister,
  photoReducer,
  navigation,
) => dispatch => {
  axios
    .post(`${API_HOST.url}/register`, dataRegister)
    .then(res => {
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const profile = res.data.data.user;

      storeData('token', { value: token });

      if (photoReducer.isUploadPhoto) {
        const photoForUpload = new FormData();
        photoForUpload.append('file', photoReducer);
        axios
          .post(`${API_HOST.url}/user/photo`, photoForUpload, {
            headers: {
              Authorization: token,
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(resUpload => {
            profile.profile_photo_url = `http://foodmarket-backend.buildwithangga.id/storage/${resUpload.data.data[0]}`;
            storeData('userProfile', profile);
            navigation.reset({ index: 0, routes: [{ name: 'SuccessSignUp' }] });
          })
          .catch(err => {
            showMessage('Upload foto tidak berhasil');
            navigation.reset({ index: 0, routes: [{ name: 'SuccessSignUp' }] });
          });
      } else {
        storeData('userProfile', profile);
        navigation.reset({ index: 0, routes: [{ name: 'SuccessSignUp' }] });
      }
      dispatch(setLoading(false));
    })
    .catch(err => {
      dispatch(setLoading(false));
      showMessage(err?.response?.data?.message);
    });
};

export const signInAction = (form, navigation) => dispatch => {
  dispatch(setLoading(true));
  axios
    .post(`${API_HOST.url}/login`, form)
    .then(res => {
      dispatch(setLoading(false));

      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const profile = res.data.data.user;

      storeData('token', { value: token });
      storeData('userProfile', profile);

      navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] });
    })
    .catch(err => {
      dispatch(setLoading(false));
      showMessage(err?.response?.data?.message);
    });
};
