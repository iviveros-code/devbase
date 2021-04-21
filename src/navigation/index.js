import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../screens/Home';
import Details from '../screens/Details';

import {theme} from '../theme';
import {NAVIGATION} from '../constants';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerBackTitleVisible={false}
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.black,
          },
          headerTintColor: '#FFF',
        }}>
        <Stack.Screen
          name={NAVIGATION.SCREEN.HOME}
          component={Home}
          options={{
            title: 'Home',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name={NAVIGATION.SCREEN.DETAILS}
          component={Details}
          options={{
            title: 'Details of user',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
