import {Platform, StyleSheet} from 'react-native';
import {appColors} from '../constants/appColors';
import {appInfos} from '../constants/appInfos';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
  },

  text: {
    fontFamily: appInfos.fontFamilies.fontBd,
    fontSize: 14,
    color: appColors.text,
  },

  button: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.white,
    paddingHorizontal: 16,
    paddingVertical: 16,
    minHeight: 56,
  },

  shadow: {
    shadowColor: Platform.OS === 'ios' ? 'rgba(0,0,0,.3)' : 'rgba(0,0,0,.5)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },

  section: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },

  iconContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3d56f0',
    borderRadius: 100,
  },

  tag: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 100,
  },

  card: {
    borderRadius: 12,
    backgroundColor: appColors.white,
    padding: 12,
    marginHorizontal: 12,
    marginVertical: 6,
    marginBottom: 16,
  },

  cardNoSpace: {
    alignItems: 'center',
    width: 50,
    height: 50,
    margin: 0,
    padding: 0,
    marginVertical: 0,
    marginHorizontal: 0,
    justifyContent: 'center',
  },
});
