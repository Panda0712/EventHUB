import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import AppRouters from './src/navigators/AppRouters';
import store from './src/redux/store';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Provider store={store}>
        <NavigationContainer>
          <AppRouters />
        </NavigationContainer>
      </Provider>

      <Toast />
    </>
  );
};

export default App;
