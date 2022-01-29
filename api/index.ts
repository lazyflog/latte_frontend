import AsyncStorage from '@react-native-async-storage/async-storage';

import Auth from './Auth';
import Store from './Store';

const API = {
  Auth,
  Store,

  async hasToken(): Promise<boolean> {
    try {
      const token = await AsyncStorage.getItem('LATTE_ACCESS_TOKEN');
      return !!token;
    } catch (e) {
      return false;
    }
  },
};

export default API;
