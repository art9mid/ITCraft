import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackNavigation } from './MainStackNavigation';

const Stack = createStackNavigator();

export function RootNavigation() {
  return (
    <Stack.Navigator initialRouteName={'MainStack'}>
      <Stack.Screen
        name={'MainStack'}
        component={MainStackNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
