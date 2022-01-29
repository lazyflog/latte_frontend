import React, {useEffect} from 'react';
import {View} from 'react-native';
import API from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TokenResponse} from '../api/Auth';

const Main: React.FC = () => {
  const saveToken = ({access, refresh}: TokenResponse) => {
    AsyncStorage.setItem('LATTE_ACCESS_TOKEN', access);
    AsyncStorage.setItem('LATTE_REFRESH_TOKEN', refresh);

    get1Store();
  };

  const authorization = async () => {
    const {data} = await API.Auth.token({
      email: 'test@test.com',
      password: '1q2w3e4r',
    });

    saveToken(data);
  };

  const get1Store = async () => {
    const response = await API.Store.getStore(1);

    console.log(response);
  };

  useEffect(() => {
    authorization();
  }, []);

  return <View />;
};

export default Main;
