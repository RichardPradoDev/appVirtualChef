<<<<<<< HEAD
import React from 'react';
import { StyleSheet, Dimensions, Image, StatusBar } from 'react-native';

import Header from '../../../../assets/produtos/livroiniciante.png'

import Texto from '../../../componentes/Texto' //Componente de Exibição de Texto

//Captura o tamanho da tela que está rodando o app
const width = Dimensions.get('screen').width;

export default function Topo({ titulo }) {
    return <>
        <StatusBar />
        <Image source={Header} style={styles.topo} />
        <Texto style={styles.titulo}>{titulo}</Texto>

    </>
}

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 1197 / 1600 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "right",
        fontSize: 22,
        color: "white",
        paddingTop: 10,
        fontWeight: "bold"

    }


=======
import React from 'react';
import { StyleSheet, Dimensions, Image, StatusBar } from 'react-native';

import Header from '../../../../assets/produtos/kitBasico.jpg'

import Texto from '../../../componentes/Texto' //Componente de Exibição de Texto

//Captura o tamanho da tela que está rodando o app
const width = Dimensions.get('screen').width;

export default function Topo({ titulo }) {
    return <>
        <StatusBar />
        <Image source={Header} style={styles.topo} />
        <Texto style={styles.titulo}>{titulo}</Texto>

    </>
}

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 1197 / 1600 * width,
    },
    titulo: {
        width: "95%",
        position: "absolute",
        textAlign: "right",
        fontSize: 22,
        color: "white",
        paddingTop: 10,
        fontWeight: "bold"

    }


>>>>>>> 4238d95979d3c472f681ee817866f51cb4b836e2
});