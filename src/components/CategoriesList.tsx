/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {FlatList, StyleProp, ViewStyle} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ChefFork} from '../assets/svgs';
import {appColors} from '../constants/appColors';
import TagComponent from './TagComponent';

interface Props {
  styles?: StyleProp<ViewStyle>;
  isFilled?: boolean;
}

interface Category {
  icon: ReactNode;
  color: string;
  label: string;
  onPress?: () => void;
  key: string;
}

const CategoriesList = (props: Props) => {
  const {isFilled, styles} = props;

  const categories: Category[] = [
    {
      key: 'Sports',
      label: 'Sports',
      icon: (
        <FontAwesome5
          name="basketball-ball"
          color={isFilled ? appColors.white : '#f0635a'}
          size={20}
        />
      ),
      color: '#f0635a',
    },
    {
      key: 'Music',
      label: 'Music',
      icon: (
        <FontAwesome5
          name="music"
          color={isFilled ? appColors.white : '#f59762'}
          size={20}
        />
      ),
      color: '#f59762',
    },
    {
      key: 'Food',
      label: 'Food',
      icon: <ChefFork color={isFilled ? appColors.white : '#29d697'} />,
      color: '#29d697',
    },
    {
      key: 'Art',
      label: 'Art',
      icon: (
        <Ionicons
          name="color-palette"
          color={isFilled ? appColors.white : '#46cdfb'}
          size={20}
        />
      ),
      color: '#46cdfb',
    },
  ];

  return (
    <FlatList
      style={[{zIndex: 100}, styles]}
      contentContainerStyle={{paddingHorizontal: 12}}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={categories}
      keyExtractor={item => item.key}
      renderItem={({item, index}) => (
        <TagComponent
          styles={{
            marginRight: index === categories.length - 1 ? 28 : 12,
            minWidth: 82,
          }}
          bgColor={isFilled ? item.color : appColors.white}
          onPress={() => {}}
          icon={item.icon}
          label={item.label}
        />
      )}
    />
  );
};

export default CategoriesList;
