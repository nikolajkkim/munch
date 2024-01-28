import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons'

export default function CButton({title, onPress, icon, color}){
    return(
        <TouchableOpacity onPress={onPress} styles={styles.button}>
            <Entypo name ={icon} size={28} color={color ? color: 'red'}/>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        height: 40,
        flexDirectino: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid blue',
    },
    text:{
        fontWeight: 'bold',
        fontSize: 10,
        color: '#f1f1f1',
        marginLeft: 10,
        marginBottom: 40,
        marginTop: 40,
    }

})