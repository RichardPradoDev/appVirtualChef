import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Texto from '../../../componentes/Texto'

export default function item({ item: { nome, imagemKit } }) {
    return <View key={nome} style={styles.item}>
        <Image source={imagemKit} style={styles.imagemKit} resizeMode="contain" />
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
    imagemKit: {
        width: 220,
        height: 220,
    }

})