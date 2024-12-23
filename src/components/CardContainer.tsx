import React, {ReactNode} from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import {appColors} from '../constants/appColors';

interface Props {
  children: ReactNode;
  onPress?: () => void;
  styles?: StyleProp<ViewStyle>;
  isShadow?: boolean;
  color?: string;
}

const CardContainer = (props: Props) => {
  const {children, onPress, styles, isShadow, color} = props;

  return (
    <TouchableOpacity
      style={[
        globalStyles.card,
        isShadow ? globalStyles.shadow : undefined,
        {
          backgroundColor: color ? color : appColors.white,
        },
        styles,
      ]}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default CardContainer;
