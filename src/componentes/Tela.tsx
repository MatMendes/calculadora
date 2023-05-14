import React from 'react';
import {  StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default (props: any) => {
    return(
    
    <View style={estilos.display}>

        <Text style={estilos.textoDisplayOper} numberOfLines={1}>
            {props.valor}</Text>

        <Text style={estilos.textoDisplayRes} numberOfLines={1}>
            {props.res}</Text>


    </View>
    )
}

const estilos = StyleSheet.create ({
    display:{
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#444',
        width: '100%',
    },
    textoDisplayRes:{
        fontSize: 30,
        color: '#fff',
    },
    textoDisplayOper:{
        fontSize: 20,
        color: '#fff',
    },
})