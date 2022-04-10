import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import API from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TokenResponse} from '../api/Auth';
import {LightTheme} from '../styles';
import Header from '../components/main/Header';
import Body from '../components/main/Body';

import {Store} from '../api/Store';
import {Pagination} from '../api/General';
import {AxiosResponse} from 'axios';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
`;

const Main: React.FC = () => {
  const saveToken = ({access, refresh}: TokenResponse) => {
    AsyncStorage.setItem('LATTE_ACCESS_TOKEN', access);
    AsyncStorage.setItem('LATTE_REFRESH_TOKEN', refresh);
  };

  const [cafeData, setCafeData] = useState<Array<Store>>([]);

  const authorization = async () => {
    const token = await AsyncStorage.getItem('LATTE_ACCESS_TOKEN');
    const {data} = await API.Auth.token({
      email: 'test@test.com',
      password: '1q2w3e4r',
    });
    if (token) {
      console.log('already logedin!');
      get1Store();
    } else {
      saveToken(data);
    }
  };

  const get1Store = async () => {
    const response: AxiosResponse<Pagination<Store>> = await API.Store.getStore(
      0,
    );

    setCafeData(response.data.results);
  };

  useEffect(() => {
    authorization();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <Container>
        <Body stores={cafeData} />
      </Container>
    </SafeAreaView>
  );
};

export default Main;
