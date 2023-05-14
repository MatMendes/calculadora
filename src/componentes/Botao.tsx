import React from 'react';
import {  StyleSheet, Text, TouchableHighlight, Dimensions } from 'react-native';

export default (props: any) => {

    const estilosBotoes=[estilos.btn]
    
    if (props.igual){
        estilosBotoes.push(estilos.btnIgual)
    }
    if (props.operacao){
        estilosBotoes.push(estilos.btnOper)
    }
    if (props.ac){
        estilosBotoes.push(estilos.btnAC)
    }
    if (props.bs){
        estilosBotoes.push(estilos.btnBS)
    }

    return(
        <TouchableHighlight
        onPress={props.aoClicar}
        >
            <Text style={estilosBotoes}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const estilos = StyleSheet.create ({
    btn:{
        fontSize: 30,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding: 20,
        backgroundColor: "#000",
        color: '#fff',
        textAlign: 'center',
    },
    btnOper: {
        color: '#9400d3',
    },
    btnIgual: {
        color: '#39ff14',
    },
    btnAC: {
        color: '#ff0',
    },
    btnBS: {
        color: '#0ff',
    },
    
})