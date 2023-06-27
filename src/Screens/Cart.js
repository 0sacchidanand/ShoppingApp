import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import Constants from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import * as TYPE from '../store/type'
import { create } from 'react-test-renderer';
import components from '../components';
import Components from '../components';

export default Cart = () => {

    const cartData = useSelector(state => state)
    useEffect(() => {
        console.log('cartData', cartData);
    }, [])

    const _renderItem = ({ item }) => {
        return (
            <components.ProductListItem
                data={item}
                onPress={() => {
                    // navigation.navigate('ProductDetails', {
                    //     data: item
                    // })

                }}
                isCart = {true}
            />
        )
    }
    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={cartData.cart}
                renderItem={_renderItem}
                keyExtractor={key => key.id}
                contentContainerStyle={{paddingHorizontal:20}}
                ListHeaderComponentStyle={
                   <Components.AppButton
                   title={'Checkout'}
                   onPress={()=>{}}
                   mainContainerStyle={styles.checkoutButton}
                   
                   />
                }
            />

        </View>
    );
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    checkoutButton:{
        marginBottom:1
    }
    
});