import axios from 'axios';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Gap, Header, Select, TextInput } from '../../components';
import { showMessage, useForm } from '../../utils';

const SignUpAddress = ({ navigation }) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Bandung',
  });

  const dispatch = useDispatch();
  const registerReducer = useSelector(state => state.registerReducer);

  const onSubmit = () => {
    const data = {
      ...form,
      ...registerReducer,
    };
    dispatch({ type: 'SET_LOADING', value: true });
    axios
      .post('http://foodmarket-backend.buildwithangga.id/api/register', data)
      .then(res => {
        dispatch({ type: 'SET_LOADING', value: false });
        showMessage('Register Success', 'success');
        navigation.replace('SuccessSignUp');
      })
      .catch(err => {
        dispatch({ type: 'SET_LOADING', value: false });
        showMessage(err?.response?.data?.message);
      });
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.page}>
        <Header
          title="Address"
          subTitle="Make sure it’s valid"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <TextInput
            label="Phone No."
            placeholder="Type your phone number"
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Address"
            placeholder="Type your address"
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label="House No."
            placeholder="Type your house number"
            value={form.houseNumber}
            onChangeText={value => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label="City"
            value={form.city}
            onSelectChange={value => setForm('city', value)}
          />
          <Gap height={24} />
          <Button text="Sign Up Now" onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingVertical: 26,
    paddingHorizontal: 24,
    marginTop: 24,
    flex: 1,
  },
});
