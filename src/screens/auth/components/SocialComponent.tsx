/* eslint-disable react-native/no-inline-styles */
import {Button, Section, Space, Text} from '@bsdaoquang/rncomponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import authenticationAPI from '../../../api/authApi';
import {Facebook, Google} from '../../../assets/svgs';
import {appColors} from '../../../constants/appColors';
import {appInfos} from '../../../constants/appInfos';
import {addAuth} from '../../../redux/reducers/authReducer';
import {globalStyles} from '../../../styles/globalStyles';

GoogleSignin.configure({
  webClientId:
    '289477437520-m8u9uv3rdfupppgeou2vacrpo8n8u2hs.apps.googleusercontent.com',
});

const SocialComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleLoginWithGoogle = async () => {
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });

    const api = '/google-sign-in';

    try {
      setIsLoading(true);
      await GoogleSignin.hasPlayServices();

      const userInfo = await GoogleSignin.signIn();

      const userData = userInfo.data?.user;

      const res = await authenticationAPI.HandleAuthentication(
        api,
        userData,
        'post',
      );

      console.log(res.data);
      dispatch(addAuth(res.data));
      await AsyncStorage.setItem('auth', JSON.stringify(res.data));
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  const handleLoginWithFacebook = async () => {};

  return (
    <Section styles={{alignItems: 'center'}}>
      <Text
        text="OR"
        size={16}
        font={appInfos.fontFamilies.fontMd}
        styles={{textAlign: 'center'}}
        color={appColors.grey}
      />

      <Space height={16} />

      <Button
        disable={isLoading}
        radius={12}
        styles={[globalStyles.shadow, {width: appInfos.sizes.width * 0.8}]}
        color={appColors.white}
        textStyleProps={{fontFamily: appInfos.fontFamilies.fontBk}}
        title="Login with Google"
        icon={<Google />}
        onPress={handleLoginWithGoogle}
      />
      <Space height={10} />
      <Button
        disable={isLoading}
        radius={12}
        styles={[globalStyles.shadow, {width: appInfos.sizes.width * 0.8}]}
        color={appColors.white}
        textStyleProps={{fontFamily: appInfos.fontFamilies.fontBk}}
        title="Login with Facebook"
        icon={<Facebook />}
        onPress={handleLoginWithFacebook}
      />
    </Section>
  );
};

export default SocialComponent;
