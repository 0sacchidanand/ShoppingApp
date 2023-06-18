import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import Data from '../store/Data'
import components from '../components';


export default Product = ({navigation}) => {

    const _renderItem = ({ item, index }) => {
        return (
            <components.ProductListItem
                data={item}
                onPress={() => {
                    navigation.navigate('ProductDetails',{
                        data: item
                    })
                    
                }}
            />
        )

    }

    return (
        <View style={styles.MainContainer}>
            <FlatList
                data={Data.ProductData}
                renderItem={_renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingHorizontal: 20 }}
            />
            <SafeAreaView />
        </View>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
    }
})