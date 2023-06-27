import React ,{useRef}from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Product from '../Screens/Product';
import ProductDetails from '../Screens/ProductDetails';
import Cart from '../Screens/Cart';

const Stack = createStackNavigator()
export default Mainnavigator = () => {

  let NavigationRef = useRef();
  return (
    <NavigationContainer 
    ref={NavigationRef}>
      <Stack.Navigator >
        <Stack.Screen name='Product' component={Product} options={{
          headerRight: ()=>(
            <View style={styles.rightHeaderView}>
              <Button title='Cart' onPress={()=>{
                NavigationRef.current.navigate('Cart')
              }}/>
            </View>
          )
        }} />
        <Stack.Screen name='ProductDetails' component={ProductDetails} options={{
          title: 'Product Detail',
          // headerRight: (
          //   <View>
          //     <Button title='Cart' onPress={()=>{}} />
          //   </View>
          // )
        }} />
        <Stack.Screen name='Cart' component={Cart} options={{ title: 'Cart' }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles =StyleSheet.create({
  rightHeaderView:{
    marginRight:10
  }
})
