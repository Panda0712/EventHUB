/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleProp, ViewStyle} from 'react-native';
import React from 'react';

interface Props {
  styles?: StyleProp<ViewStyle>;
}

const AvatarGroup = (props: Props) => {
  const {styles} = props;

  return (
    <View style={[{marginVertical: 10}, styles]}>
      <Text>AvatarGroup</Text>
    </View>
  );
};

export default AvatarGroup;
