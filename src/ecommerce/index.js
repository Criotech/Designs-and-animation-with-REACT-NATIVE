import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from './dashboard';
import Details from './product';

export default function Index () {
  const Stack = createStackNavigator ();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />
        <Stack.Screen name="Details" component={Details} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
