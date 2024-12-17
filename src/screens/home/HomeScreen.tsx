/* eslint-disable react-native/no-inline-styles */

import {StatusBar, TouchableOpacity, View} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';
import {appColors} from '../../constants/appColors';
import {Row, Space, Text} from '@bsdaoquang/rncomponent';
import {HambergerMenu, Notification} from 'iconsax-react-native';
import {appInfos} from '../../constants/appInfos';
import {CircleContainer} from '../../components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={[globalStyles.container]}>
      <StatusBar barStyle="light-content" />
      <View
        style={{
          height: 179,
          backgroundColor: appColors.primary,
          borderBottomLeftRadius: 45,
          borderBottomRightRadius: 45,
          padding: 42,
        }}>
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
      </View>
      <View style={{flex: 1, backgroundColor: appColors.white}}></View>
    </View>
  );
};

export default HomeScreen;
