/* eslint-disable react-native/no-inline-styles */
import {Button, Row, Section, Space, Text} from '@bsdaoquang/rncomponent';
import {ArrowLeft, ArrowRight, Calendar, Location} from 'iconsax-react-native';
import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CircleContainer} from '../../components';
import AvatarGroup from '../../components/AvatarGroup';
import {appColors} from '../../constants/appColors';
import {appInfos} from '../../constants/appInfos';
import {EventModel} from '../../models/EventModel';
import {globalStyles} from '../../styles/globalStyles';

const EventDetails = ({navigation, route}: any) => {
  const {item}: {item: EventModel} = route.params;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColors.white,
        position: 'relative',
      }}>
      <ImageBackground
        imageStyle={{
          resizeMode: 'cover',
          width: appInfos.sizes.width,
          height: 244,
        }}
        source={require('../../assets/images/demo-event-image.png')}
        width={50}
        height={50}
        alt="event image">
        <LinearGradient colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0)']}>
          <Row
            justifyContent="space-between"
            alignItems="center"
            styles={{
              padding: 16,
              paddingTop:
                Platform.OS === 'android' ? StatusBar.currentHeight : 30,
            }}>
            <Row justifyContent="flex-start" alignItems="center">
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeft size={24} color={appColors.white} />
              </TouchableOpacity>
              <Space width={8} />
              <Text
                font={appInfos.fontFamilies.fontMd}
                text="Event Detail"
                size={24}
                color={appColors.white}
              />
            </Row>
            <CircleContainer
              style={{borderRadius: 12}}
              size={36}
              color="rgba(255,255,255,0.3)">
              <Ionicons name="bookmark" size={15} color={appColors.white} />
            </CircleContainer>
          </Row>
        </LinearGradient>
        <ScrollView
          contentContainerStyle={{paddingTop: 170, paddingBottom: 200}}>
          <Section
            styles={{
              backgroundColor: appColors.white,
              width: appInfos.sizes.width,
            }}>
            <Row
              justifyContent="space-between"
              alignItems="center"
              styles={[
                globalStyles.shadow,
                {
                  marginTop: -30,
                  backgroundColor: appColors.white,
                  paddingHorizontal: 20,
                  width: appInfos.sizes.width * 0.8,
                  height: 60,
                  marginHorizontal: 'auto',
                  borderRadius: 100,
                },
              ]}>
              <AvatarGroup size={35} textSize={15} />
              <Button
                radius={7}
                title="Invite"
                textStyleProps={{
                  textAlign: 'center',
                  fontSize: 12,
                  fontFamily: appInfos.fontFamilies.fontMd,
                }}
                color={appColors.primary}
                styles={{
                  marginBottom: 0,
                  paddingHorizontal: 24,
                  height: 28,
                }}
                onPress={() => {}}
              />
            </Row>
            <Space height={24} />
            <Text
              text={item.title}
              font={appInfos.fontFamilies.fontBk}
              size={35}
              color={appColors.black}
            />
          </Section>

          <Section styles={{backgroundColor: appColors.white}}>
            <Row justifyContent="flex-start" alignItems="center">
              <CircleContainer
                size={48}
                color={appColors.grey5}
                style={{borderRadius: 12}}>
                <Calendar size={24} variant="Bold" color={appColors.primary} />
              </CircleContainer>
              <Space width={12} />
              <View style={{height: 48}}>
                <Text
                  size={16}
                  font={appInfos.fontFamilies.fontMd}
                  text="14 December, 2021"
                />
                <Space height={8} />
                <Text
                  color={appColors.text2}
                  size={12}
                  text="Tuesday, 4:00PM - 9:00PM"
                />
              </View>
            </Row>

            <Space height={24} />

            <Row justifyContent="flex-start" alignItems="center">
              <CircleContainer
                size={48}
                color={appColors.grey2}
                style={{borderRadius: 12}}>
                <Location size={24} variant="Bold" color={appColors.primary} />
              </CircleContainer>
              <Space width={12} />
              <View style={{height: 48}}>
                <Text
                  size={16}
                  font={appInfos.fontFamilies.fontMd}
                  text={item.location.title}
                />
                <Space height={8} />
                <Text
                  color={appColors.text2}
                  size={12}
                  text={item.location.address}
                />
              </View>
            </Row>

            <Space height={24} />

            <Row justifyContent="flex-start" alignItems="center">
              <CircleContainer
                size={48}
                color={appColors.grey5}
                style={{borderRadius: 12}}>
                <Image
                  source={require('../../assets/images/demo-event-image.png')}
                  width={48}
                  height={48}
                  resizeMode="cover"
                  style={{width: 48, height: 48, borderRadius: 12}}
                />
              </CircleContainer>
              <Space width={12} />
              <View style={{height: 48, flex: 1}}>
                <Text
                  size={16}
                  font={appInfos.fontFamilies.fontMd}
                  text="BRAY"
                />
                <Space height={8} />
                <Text color={appColors.text2} size={12} text="Organizer" />
              </View>
              <TouchableOpacity
                style={{
                  borderRadius: 7,
                  width: 60,
                  height: 28,
                  backgroundColor: appColors.grey2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  text="Follow"
                  font={appInfos.fontFamilies.fontBk}
                  size={12}
                  styles={{textAlign: 'center'}}
                  color={appColors.primary}
                />
              </TouchableOpacity>
            </Row>
          </Section>

          <Section>
            <Text
              text="About Event"
              size={18}
              font={appInfos.fontFamilies.fontMd}
            />
            <Space height={12} />
            <Text size={16} text={item.description} />
          </Section>
        </ScrollView>
      </ImageBackground>
      <LinearGradient
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
        }}
        colors={['rgba(255,255,255,0.8)', 'rgba(255,255,255,255)']}>
        <View style={{padding: 16, paddingTop: 24}}>
          <Button
            radius={18}
            styles={{
              paddingVertical: 24,
              width: appInfos.sizes.width * 0.7,
              marginHorizontal: 'auto',
            }}
            textStyleProps={{
              fontSize: 16,
              letterSpacing: 1,
            }}
            iconPosition="right"
            icon={
              <CircleContainer
                style={{position: 'absolute', right: 16}}
                size={30}
                color={appColors.primary2}>
                <ArrowRight size={16} color={appColors.white} />
              </CircleContainer>
            }
            color={appColors.primary}
            title="BUY TICKET $120"
            onPress={() => {}}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default EventDetails;
