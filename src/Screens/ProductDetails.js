import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView,SafeAreaView , TouchableOpacity,} from 'react-native';
import Constants from '../constants';
import {useDispatch,useSelector} from 'react-redux';
import * as TYPE from '../store/type'


export default ProductDetails = ({ navigation, route }) => {
    const data = route.params.data;
    const Dispatch =useDispatch();
    useEffect(() => {
        console.log(route.params.data);

    }, [])

    const addToCart = () =>{
        Dispatch({type:TYPE.ADD_TO_CART,payload: data})
        setTimeout(()=>{
         navigation.navigate('Cart')
        },1000)
    }
    return (
        <View style={styles.mainContainer}>
            <ScrollView>
                <Image
                    source={data.image}
                    resizeMode='cover'
                    style={styles.topImage}
                />
                <View style={styles.contentContainer}>
                    <Text style={styles.name}>name:{data.name}</Text>
                    <Text style={styles.otherProductCaption}>size:<Text style={styles.otherProduct}>{data.size}</Text></Text>
                    <Text style={styles.otherProductCaption}>Brand:<Text style={styles.otherProduct}>{data.Brand}</Text></Text>
                    <Text style={styles.otherProductCaption}>price:<Text style={styles.otherProduct}>{data.price}</Text></Text>
                    <Text style={styles.otherProductCaption}>Product Details:<Text style={styles.otherProduct}>{data.description}</Text></Text>
                    <TouchableOpacity style={styles.addToCardButton }
                    onPress={addToCart}
                    >
                        <Text style={{color:'#000'}}>Add to Card</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <SafeAreaView/>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    topImage: {
        height: Constants.Constant.SCREEN_HEIGHT * 0.4,
        width: '100%',
    },
    contentContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    name: {
        fontSize: 20,
        fontWeight: '700',
        color: Constants.Colors.BLAck,
        marginBottom: 10,
    },
    otherProductCaption: {
        fontSize: 18,
        fontWeight: '700',
        color: Constants.Colors.BLAck,
        marginBottom: 10,
    },
    otherProduct: {
        fontSize: 18,
        fontWeight: '400',
        color: Constants.Colors.BLAck,
    },
    addToCardButton:{
        width:'100%',
        height:40,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Constants.Colors.PRIMERY,
       marginBottom:30,
    },

})