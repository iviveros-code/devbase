import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../screens/Home';
import Details from '../screens/Details';

import {theme} from '../theme';

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
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          // options={({route}) => ({title: route.params.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
