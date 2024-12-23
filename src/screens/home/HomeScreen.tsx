/* eslint-disable react-native/no-inline-styles */

import {Button, Row, Space, Text} from '@bsdaoquang/rncomponent';
import {
  HambergerMenu,
  Notification,
  SearchNormal1,
  Sort,
} from 'iconsax-react-native';
import React from 'react';
import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  CardContainer,
  CardItem,
  CategoriesList,
  CircleContainer,
  TabbarComponent,
  TagComponent,
} from '../../components';
import {appColors} from '../../constants/appColors';
import {appInfos} from '../../constants/appInfos';
import {globalStyles} from '../../styles/globalStyles';

const HomeScreen = ({navigation}: any) => {
  const itemEvent = {
    title: 'International Band Music Concert',
    description:
      'Enjoy your favorite dishe and a lovely your friends and family and have a great time',
    location: {
      title: 'Gala Convention Center',
      address: '36 Guild Street London, UK',
    },
    imageUrl: '',
    users: [''],
    authorId: '',
    startAt: Date.now(),
    endAt: Date.now(),
    date: Date.now(),
  };

  return (
    <View style={[globalStyles.container]}>
      <StatusBar barStyle="light-content" />
      <View
        style={{
          position: 'relative',
          height: Platform.OS === 'android' ? 180 : 196,
          backgroundColor: appColors.primary,
          borderBottomLeftRadius: 45,
          borderBottomRightRadius: 45,
          paddingTop: 42,
          paddingBottom: 10,
          zIndex: 10,
        }}>
        <View style={{paddingHorizontal: 16}}>
          <Row>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <HambergerMenu size={24} color={appColors.white} />
            </TouchableOpacity>
            <Row
              styles={{flex: 1, flexDirection: 'column', alignItems: 'center'}}
              alignItems="center"
              justifyContent="center">
              <Row alignItems="center">
                <Text
                  text="Current location"
                  size={12}
                  font={appInfos.fontFamilies.fontBk}
                  color={appColors.grey6}
                />
                <Space width={2} />
                <MaterialIcons
                  name="arrow-drop-down"
                  size={18}
                  color={appColors.white}
                />
              </Row>
              <Space height={2} />
              <Text
                text="New York, USA"
                size={13}
                font={appInfos.fontFamilies.fontMd}
                color={appColors.white}
              />
            </Row>
            <CircleContainer color={appColors.primary2}>
              <View>
                <Notification size={18} color={appColors.white} />
                <View
                  style={{
                    width: 8,
                    height: 8,
                    backgroundColor: appColors.grey7,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: appColors.primary2,
                    position: 'absolute',
                    top: -2,
                    right: 1,
                  }}
                />
              </View>
            </CircleContainer>
          </Row>
          <Space height={20} />
          <Row>
            <Row
              onPress={() =>
                navigation.navigate('SearchScreen', {
                  isFilter: false,
                })
              }
              styles={{flex: 1}}
              alignItems="center"
              justifyContent="flex-start">
              <SearchNormal1
                variant="TwoTone"
                color={appColors.white}
                size={20}
              />
              <View
                style={{
                  backgroundColor: appColors.grey2,
                  width: 1,
                  height: 20,
                  marginHorizontal: 10,
                }}
              />
              <Text
                styles={{
                  flex: 1,
                }}
                size={18}
                text="Search..."
                color={appColors.grey2}
                flex={1}
              />
            </Row>
            <TagComponent
              bgColor="#5d56f3"
              styles={{alignItems: 'center'}}
              onPress={() =>
                navigation.navigate('SearchScreen', {
                  isFilter: true,
                })
              }
              icon={
                <CircleContainer color="#b1aefa" size={20}>
                  <Sort size={16} color="#5d56f3" />
                </CircleContainer>
              }
              label="Filters"
              textColor={appColors.grey2}
            />
          </Row>
        </View>
        <Space height={20} />
        <CategoriesList
          styles={{position: 'absolute', bottom: -16, right: 0, left: 0}}
          isFilled
        />
      </View>
      <Space height={30} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, backgroundColor: appColors.white, marginTop: 14}}>
        <TabbarComponent title="Upcoming Events" onPress={() => {}} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={Array.from({length: 5})}
          renderItem={({item, index}) => (
            <CardItem item={itemEvent} type="card" key={index} />
          )}
        />

        <Space height={16} />

        <CardContainer styles={{padding: 0}} color="#d6feff">
          <Row
            styles={{position: 'relative', paddingHorizontal: 24}}
            justifyContent="flex-start">
            <Row
              styles={{flexDirection: 'column', paddingTop: 12}}
              alignItems="flex-start">
              <Text
                font={appInfos.fontFamilies.fontMd}
                text="Invite your friends"
                size={18}
                color={appColors.black}
              />
              <Space height={10} />
              <Text text="Get $20 for ticket" />
              <Space height={10} />
              <Button
                radius={6}
                styles={{paddingVertical: 4}}
                title="INVITE"
                color={appColors.blue}
                onPress={() => {}}
              />
            </Row>
            <Image
              source={require('../../assets/images/invite-image.png')}
              width={100}
              height={100}
              resizeMode="cover"
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                top: 0,
              }}
            />
          </Row>
        </CardContainer>

        <Space height={16} />

        <TabbarComponent title="Nearby You" onPress={() => {}} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={Array.from({length: 5})}
          renderItem={({item, index}) => (
            <CardItem item={itemEvent} type="card" key={index} />
          )}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
