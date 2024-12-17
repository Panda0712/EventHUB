/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {Text} from '@bsdaoquang/rncomponent';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AddSquare, Calendar, Location, User} from 'iconsax-react-native';
import React, {ReactNode} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CircleContainer} from '../components';
import {appColors} from '../constants/appColors';
import {AddNewScreen} from '../screens';
import EventNavigator from './EventNavigator';
import HomeNavigator from './HomeNavigator';
import MapNavigator from './MapNavigator';
import ProfileNavigator from './ProfileNavigator';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: appColors.white,
        },
        tabBarIcon: ({focused, color, size}) => {
          let icon: ReactNode;
          color = focused ? appColors.primary : appColors.grey5;
          size = 24;

          switch (route.name) {
            case 'Home':
              icon = <MaterialIcons name="explore" size={size} color={color} />;
              break;
            case 'Event':
              icon = <Calendar size={size} color={color} variant="Bold" />;
              break;
            case 'Map':
              icon = <Location size={size} color={color} variant="Bold" />;
              break;
            case 'Profile':
              icon = <User size={size} color={color} variant="Bold" />;
              break;
            case 'Add':
              icon = (
                <CircleContainer size={50} style={{marginTop: -45}}>
                  <AddSquare size={24} color={appColors.white} variant="Bold" />
                </CircleContainer>
              );
              break;
          }

          return icon;
        },
        tabBarIconStyle: {
          marginTop: 8,
        },
        tabBarLabel: ({focused}) => {
          return route.name === 'Add' ? null : (
            <Text
              text={route.name}
              flex={0}
              size={12}
              color={focused ? appColors.primary : appColors.grey5}
            />
          );
        },
      })}>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Event" component={EventNavigator} />
      <Tab.Screen name="Add" component={AddNewScreen} />
      <Tab.Screen name="Map" component={MapNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
