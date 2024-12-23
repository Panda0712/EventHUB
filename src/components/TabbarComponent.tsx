/* eslint-disable react-native/no-inline-styles */
import {Row, Text} from '@bsdaoquang/rncomponent';
import {ArrowRight2} from 'iconsax-react-native';
import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {appColors} from '../constants/appColors';
import {appInfos} from '../constants/appInfos';

interface Props {
  styles?: StyleProp<ViewStyle>;
  title: string;
  onPress: () => void;
}

const TabbarComponent = (props: Props) => {
  const {title, onPress, styles} = props;

  return (
    <Row
      justifyContent="space-between"
      styles={[{marginBottom: 20, paddingHorizontal: 16}, styles]}>
      <Text
        styles={{flex: 1}}
        font={appInfos.fontFamilies.fontMd}
        size={18}
        text={title}
        flex={1}
      />
      <Row onPress={onPress}>
        <Text text="See All" size={14} color={appColors.text2} />
        <ArrowRight2 size={14} color={appColors.text2} variant="Bold" />
      </Row>
    </Row>
  );
};

export default TabbarComponent;
