import React from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';
import constants from '../constants'

export default ProductListItem = (props) => {
    const { data,onPress,isCart=false } = props;
    return (
        <TouchableOpacity 
        activeOpacity={0.5}
        onPress={onPress}
        style={styles.MainContainer}>
            <View style={styles.productImageView}>
             <Image 
             source={data.image}
             resizeMode='cover'
             style={styles.productImage}
             />
            </View>
            <View>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.otherdata}>size:{data.size}</Text>
                <Text style={styles.otherdata}>Brand:{data.Brand}</Text>
                <Text style={styles.otherdata}>{data.price}</Text>
                {isCart &&
                 <Text style={styles.otherdata}>OTY: {data.OTY}</Text> 
                }
                
            </View>

        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    MainContainer: {
        marginVertical: 10,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: constants.Colors.WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:8
    },
    productImage:{
        height:75,
        width:75,
    },
    productImageView:{
        borderRadius:8,
        overflow:'hidden',
        marginRight:20,
    },
    name:{
        fontSize:18,
        fontWeight:'700',
        color:constants.Colors.BLAck
    },
    otherdata:{
        fontSize:14,
        fontWeight:'600',
        color:constants.Colors.BLAck
    }
})