import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DrawerNavigator from './DrawerNavigator';
import {EventDetails} from '../screens';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={DrawerNavigator} />
      <Stack.Screen name="EventDetails" component={EventDetails} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
