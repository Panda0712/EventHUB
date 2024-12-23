import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {EventDetails, HomeScreen, SearchScreen} from '../screens';

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="EventDetails" component={EventDetails} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
