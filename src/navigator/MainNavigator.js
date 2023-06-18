import React from 'react';
import { View, Text,Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Product from '../Screens/Product';
import ProductDetails from '../Screens/ProductDetails';
import Cart from '../Screens/Cart';

const Stack = createStackNavigator()
export default  Mainnavigator = ()=> {
  return (
    <NavigationContainer>
          <Stack.Navigator >
            <Stack.Screen  name='Product' component={Product}/>
            <Stack.Screen  name='ProductDetails' component={ProductDetails} options={{title:'Product Detail'}}/>
            <Stack.Screen  name='Cart' component={Cart} options={{title:'Cart'}}/>

            
          </Stack.Navigator>
    </NavigationContainer>
  );
}
