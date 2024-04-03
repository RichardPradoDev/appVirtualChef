import React from "react";
import { StyleSheet, Image, View } from 'react-native';

import logo from '../../assets/logop.png'
import Texto from '../componentes/texto'

export default function Detalhes() {
    return (
        <View style={styles.container}>
            <View style={styles.logotipo}>
                <Image source={logo} style={styles.logo} resizeMode="contain" />
                <Texto style={styles.title}>"Livro de Culinária para Iniciantes"</Texto>
            </View>
            <Texto style={styles.subtitle}>Nosso livro de culinária físico ensina receitas básicas, combinações de lanches perfeitas e harmonizações impecáveis de molhos.</Texto>
            <Texto style={styles.price}>R$ 49,90</Texto>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAE4D8',
        alignItems: 'center',
        paddingTop: '20%',
        width: '100%',
        height: 400 / 400 * width,
    },
    img: {
        width: 400,
        height: 400,
        margin: 10,

    },

    logotipo: {
        width: '100%',
        flexDirection: "row",

    },

    logo: {
        width: 60,
        height: 60,
    },
    subtitle: {
        fontSize: 16,
        color: 'black',
        width: '100%',
        textAlign: 'center'
    },

    price: {
        fontSize: 16,
        color: 'red',
        width: '100%',
        textAlign: 'center'
    },

});