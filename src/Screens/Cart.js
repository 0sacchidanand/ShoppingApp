import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import Constants from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import * as TYPE from '../store/type'
import { create } from 'react-test-renderer';

export default Cart = () => {

    const cartData = useSelector(state => state)
    useEffect(() => {
        console.log('cartData', cartData);
    }, [])

    const _renderItem = ({item}) => {
        return (
            <View>
                <Text>{item.name}</Text>
            </View>
        )
    }
    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={cartData.cart}
                renderItem={_renderItem}
                keyExtractor={key => key.id}
            />
            
        </View>
    );
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    }
});