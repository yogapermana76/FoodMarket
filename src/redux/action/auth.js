import axios from 'axios';
import { showMessage } from '../../utils';
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
          .then(resPhoto => {
            console.log(resPhoto, 'response success upload photo');
          })
          .catch(err => {
            console.log(err, 'error upload photo');
            showMessage('Upload foto tidak berhasil');
          });
      }
      dispatch(setLoading(false));
      showMessage('Register Success', 'success');
      navigation.replace('SuccessSignUp');
    })
    .catch(err => {
      dispatch(setLoading(false));
      showMessage(err?.response?.data?.message);
    });
};
