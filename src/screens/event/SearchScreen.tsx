import {View, Text} from 'react-native';
import React from 'react';

const SearchScreen = ({navigation, route}: any) => {
  const {isFilter}: {isFilter: boolean} = route.params;

  console.log(isFilter);

  return (
    <View>
      <Text>SearchScreen</Text>
    </View>
  );
};

export default SearchScreen;
