<<<<<<< HEAD
import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Texto from '../../../componentes/Texto'

export default function item({ item: { nome, imagem } }) {
    return <View key={nome} style={styles.item}>
        <Image source={imagem} style={styles.imagens} />
        <Texto style={styles.nome}>{nome}</Texto>
    </View>
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical: 16,
        alignItems: "center"
    },
    nome: {
        fontSize: 20,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"

    },
    imagem: {
        width: 80,
        height: 80,
    }
=======
import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Texto from '../../../componentes/Texto'

export default function item({ item: { nome, imagem } }) {
    return <View key={nome} style={styles.item}>
        <Image source={imagem} style={styles.imagem} resizeMode="contain" />
        <Texto style={styles.nome}>{nome}</Texto>
    </View>
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical: 16,
        alignItems: "center"
    },
    nome: {
        fontSize: 20,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"

    },
    imagem: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginLeft: 10,
    }
>>>>>>> 4238d95979d3c472f681ee817866f51cb4b836e2
})