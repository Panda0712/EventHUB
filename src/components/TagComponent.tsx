/* eslint-disable react-native/no-inline-styles */
import {Text} from '@bsdaoquang/rncomponent';
import React, {ReactNode} from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import {appColors} from '../constants/appColors';

interface Props {
  icon?: ReactNode;
  label: string;
  color?: string;
  onPress?: () => void;
  children?: ReactNode;
  textColor?: string;
  bgColor?: string;
  styles?: StyleProp<ViewStyle>;
}

const TagComponent = (props: Props) => {
  const {icon, label, color, styles, onPress, children, textColor, bgColor} =
    props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        globalStyles.row,
        globalStyles.tag,
        {
          backgroundColor: bgColor ? bgColor : appColors.white,
        },
        styles,
      ]}>
      {icon && icon}
      <Text
        text={label}
        color={
          textColor ? textColor : bgColor ? appColors.white : appColors.grey2
        }
        styles={{marginLeft: icon ? 8 : 0}}
      />
      {children && children}
    </TouchableOpacity>
  );
};

export default TagComponent;
