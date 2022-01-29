import React, {useEffect} from 'react';
import {View} from 'react-native';
import API from '../api';

const Main: React.FC = () => {
  const refresh = async () => {
    const response = API.Auth.token({email: '', password: ''});

    console.log(response);
  };

  useEffect(() => {
    refresh();
  }, []);

  return <View />;
};

export default Main;
