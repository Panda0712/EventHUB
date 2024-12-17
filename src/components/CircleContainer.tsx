import React, {ReactNode} from 'react';
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';
import {appColors} from '../constants/appColors';

interface Props {
  size?: number;
  children: ReactNode;
  color?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const CircleContainer = (props: Props) => {
  const {children, size, color, onPress, style} = props;

  const styleProp: any = {
    width: size ?? 36,
    height: size ?? 36,
    backgroundColor: color ?? appColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  };

  return onPress ? (
    <TouchableOpacity onPress={onPress} style={[styleProp, style]}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={[styleProp, style]}>{children}</View>
  );
};

export default CircleContainer;
