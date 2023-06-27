import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Constants from '../constants'

export default AppButton = (props) => {

     const {title,onPress,mainContainerStyle}=props
    return (
        <TouchableOpacity style={[styles.addToCardButton, mainContainerStyle]}
            onPress={onPress}
        >
            <Text style={styles.addToCardButton}></Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
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
