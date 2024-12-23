/* eslint-disable react-native/no-inline-styles */
import {Row, Text} from '@bsdaoquang/rncomponent';
import React from 'react';
import {Image, StyleProp, ViewStyle} from 'react-native';
import {appColors} from '../constants/appColors';
import {appInfos} from '../constants/appInfos';

interface Props {
  styles?: StyleProp<ViewStyle>;
}

const AvatarGroup = (props: Props) => {
  const {styles} = props;

  return (
    <Row justifyContent="flex-start" styles={[{marginVertical: 10}, styles]}>
      {Array.from({length: 3}).map((item, index) => (
        <Image
          key={index}
          source={require('../assets/images/avatar.png')}
          width={50}
          height={50}
          resizeMode="cover"
          style={{
            width: 30,
            height: 30,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: appColors.white,
            marginLeft: index > 0 ? -12 : 0,
          }}
        />
      ))}
      <Text
        styles={{marginLeft: 8}}
        text="+20 Going"
        font={appInfos.fontFamilies.fontMd}
        color={appColors.primary3}
        size={12}
      />
    </Row>
  );
};

export default AvatarGroup;
