import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as Sentry from '@sentry/react-native';
import {API_BASE_PATH} from '@env';

const client = axios.create({
  baseURL: API_BASE_PATH,
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use(async (config: AxiosRequestConfig) => {
  try {
    const token = await AsyncStorage.getItem('LATTE_ACCESS_TOKEN');
    config.headers.Authorization = `Bearer ${token}`;
  } catch (e) {}

  return config;
});

client.interceptors.response.use(
  response => {
    return response;
  },
  async function (error: AxiosError) {
    Sentry.captureException(error);
    return Promise.reject(error);
  },
);

export default client;
