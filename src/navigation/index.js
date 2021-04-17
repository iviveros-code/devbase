import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerBackTitleVisible={false}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#7159c1',
          },
          headerTintColor: '#FFF',
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'GitHub Users',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={({route}) => ({title: route.params.user.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
