/* eslint-disable react-native/no-inline-styles */
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {Button, Row, Text} from '@bsdaoquang/rncomponent';
import {appInfos} from '../constants/appInfos';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {authSelector, removeAuth} from '../redux/reducers/authReducer';
import {appColors} from '../constants/appColors';
import {
  Bookmark2,
  Calendar,
  Logout,
  Message2,
  MessageQuestion,
  Setting2,
  Sms,
  User,
} from 'iconsax-react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager} from 'react-native-fbsdk-next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DrawerCustom = ({navigation}: any) => {
  const user = useSelector(authSelector);

  const dispatch = useDispatch();

  const size = 20;
  const color = appColors.grey;
  const profileMenu = [
    {
      key: 'MyProfile',
      title: 'My Profile',
      icon: <User size={size} color={color} />,
    },
    {
      key: 'Message',
      title: 'Message',
      icon: <Message2 size={size} color={color} />,
    },
    {
      key: 'Calendar',
      title: 'Calendar',
      icon: <Calendar size={size} color={color} />,
    },
    {
      key: 'Bookmark',
      title: 'Bookmark',
      icon: <Bookmark2 size={size} color={color} />,
    },
    {
      key: 'ContactUs',
      title: 'Contact Us',
      icon: <Sms size={size} color={color} />,
    },
    {
      key: 'Settings',
      title: 'Settings',
      icon: <Setting2 size={size} color={color} />,
    },
    {
      key: 'HelpAndFAQs',
      title: 'Help & FAQs',
      icon: <MessageQuestion size={size} color={color} />,
    },
    {
      key: 'SignOut',
      title: 'Sign Out',
      icon: <Logout size={size} color={color} />,
    },
  ];

  const handleSignOut = async () => {
    await GoogleSignin.signOut();
    await LoginManager.logOut();
    dispatch(removeAuth());
    await AsyncStorage.clear();
  };

  return (
    <View style={[localStyles.container]}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.closeDrawer();
            navigation.navigate('HomeNavigator', {
              screen: 'Profile',
              params: {screen: 'ProfileScreen'},
            });
          }}>
          {user.photo ? (
            <Image
              width={20}
              height={20}
              source={{uri: user.photo}}
              style={[localStyles.avatar]}
            />
          ) : (
            <View
              style={[localStyles.avatar, {backgroundColor: appColors.grey}]}>
              <Text
                size={22}
                color={appColors.white}
                text={
                  user.name
                    ? user.name
                        .split(' ')
                        [user.name.split(' ').length - 1].substring(0, 1)
                    : ''
                }
              />
            </View>
          )}
          <Text text={user.name} size={18} />
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={profileMenu}
        style={{flex: 1, paddingVertical: 20}}
        renderItem={({item, index}) => (
          <Row
            onPress={
              item.key === 'SignOut'
                ? () => handleSignOut()
                : () => {
                    console.log(item.key);
                    navigation.closeDrawer();
                  }
            }
            key={index}
            styles={[localStyles.listItem]}>
            {item.icon}
            <Text styles={[localStyles.listItemText]} text={item.title} />
          </Row>
        )}
      />
      <View>
        <Row justifyContent="flex-start">
          <Button
            icon={
              <MaterialCommunityIcons name="crown" size={24} color="#00f8ff" />
            }
            radius={8}
            isShadow={false}
            textStyleProps={{color: '#00f8ff'}}
            styles={{width: appInfos.sizes.width * 0.6}}
            title="Upgrade Pro"
            color="#00f8ff33"
            onPress={() => {}}
          />
        </Row>
      </View>
    </View>
  );
};

export default DrawerCustom;

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingVertical: Platform.OS === 'android' ? StatusBar.currentHeight : 48,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  listItem: {
    paddingVertical: 12,
    justifyContent: 'flex-start',
  },

  listItemText: {
    paddingLeft: 12,
  },
});
