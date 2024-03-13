import React from "react";
import { StyleSheet, Text, StatusBar, Image, View } from 'react-native';

import logo from '../../assets/logo.png'

export default function Inicio() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={logo} />
            <StatusBar style="auto" />
            <Text style={styles.text}>Bem vindo ao Virtual Chef</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#018191',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {

        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },
    img: {
        width: 350,
        height: 350,
        borderRadius: 120,
    },
});