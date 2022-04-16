import React from 'react';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import useTheme from './hooks/ui/useTheme';

import Main from './views/main';
import Search from './views/search';

const RootStack = createStackNavigator();

const AppRouter: React.FC = () => {
  const theme: Theme = useTheme();

  return (
    <NavigationContainer theme={theme}>
      <RootStack.Navigator initialRouteName="Main">
        <RootStack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
