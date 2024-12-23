/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import CardContainer from './CardContainer';
import {Row, Space, Text} from '@bsdaoquang/rncomponent';
import {appInfos} from '../constants/appInfos';
import {EventModel} from '../models/EventModel';
import AvatarGroup from './AvatarGroup';
import {Location} from 'iconsax-react-native';
import {appColors} from '../constants/appColors';
import {ImageBackground} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  EventDetails: {item: EventModel};
};

type EventDetailsNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'EventDetails'
>;

interface Props {
  item: EventModel;
  type: 'card' | 'list';
}

const CardItem = (props: Props) => {
  const {item, type} = props;

  const navigation = useNavigation<EventDetailsNavigationProps>();

  return (
    <CardContainer
      isShadow
      styles={{
        maxWidth: appInfos.sizes.width * 0.6,
        position: 'relative',
        padding: 10,
      }}
      onPress={() => navigation.navigate('EventDetails', {item})}>
      <ImageBackground
        resizeMode="cover"
        imageStyle={{
          borderRadius: 12,
        }}
        style={[
          {
            flex: 1,
            marginBottom: 12,
            height: 131,
          },
        ]}
        source={require('../assets/images/demo-event-image.png')}
        width={100}
        height={100}>
        <Row
          alignItems="flex-start"
          justifyContent="space-between"
          styles={{paddingVertical: 4}}>
          <CardContainer
            color="#ffffffb3"
            styles={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 50,
              height: 50,
            }}>
            <Text
              text="10"
              font={appInfos.fontFamilies.fontBd}
              color={appColors.red}
            />
            <Text
              text="JUNE"
              font={appInfos.fontFamilies.fontMd}
              size={10}
              color={appColors.red}
            />
          </CardContainer>
          <CardContainer>
            <Ionicons name="bookmark" size={16} color={appColors.red} />
          </CardContainer>
        </Row>
      </ImageBackground>
      <Text
        numberOfLine={1}
        font={appInfos.fontFamilies.fontMd}
        text={item.title}
        size={18}
      />
      <AvatarGroup />
      <Space height={8} />
      <Row justifyContent="flex-start">
        <Location size={18} color={appColors.text3} variant="Bold" />
        <Space width={4} />
        <Text
          numberOfLine={1}
          text={item.location.address}
          size={12}
          color={appColors.text2}
        />
      </Row>
    </CardContainer>
  );
};

export default CardItem;
