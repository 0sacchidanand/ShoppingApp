
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MainNavigator from '../ShoppingApp/src/navigator/MainNavigator';
import {Provider} from 'react-redux'
import Store from './src/store/store'

const App =()=> {
   return(
    <Provider store={Store}>
   <MainNavigator />
   </Provider>
   )
  };


export default App;
