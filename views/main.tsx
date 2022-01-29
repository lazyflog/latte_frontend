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

const Main: React.FC = () => {
  const saveToken = ({access, refresh}: TokenResponse) => {
    AsyncStorage.setItem('LATTE_ACCESS_TOKEN', access);
    AsyncStorage.setItem('LATTE_REFRESH_TOKEN', refresh);
  };

  const [cafeData, setCafeData] = useState([]);

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
    const response = await API.Store.getStore(0);
    setCafeData(response.data.results);
  };

  useEffect(() => {
    authorization();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={cafeData}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <View
            style={{
              flexDirection: 'row',
              paddingBottom: 20,
              paddingLeft: 20,
              backgroundColor: LightTheme.colors.background,
            }}>
            <Text style={{fontWeight: '600', fontSize: 18, color: '#393939'}}>
              LATTE
            </Text>
          </View>
        }
        stickyHeaderIndices={[0]}
        renderItem={({item}) => {
          return (
            <View style={{flex: 1, marginTop: 5}}>
              <TouchableOpacity
                style={{
                  padding: 20,
                  backgroundColor: LightTheme.colors.nav_background,
                }}>
                <Text
                  style={{fontWeight: '500', fontSize: 15, color: '#393939'}}>
                  가게명: {item.name}
                </Text>
                {item.tag.length > 0 ? (
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    {item?.tag.map((value, index): any => {
                      return (
                        <View
                          style={{
                            padding: 10,
                            backgroundColor: '#393939',
                            marginRight: 10,
                          }}
                          key={index}>
                          <Text
                            style={{
                              fontWeight: '500',
                              fontSize: 13,
                              color: '#FFF',
                            }}>
                            {value}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                ) : null}
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Main;
