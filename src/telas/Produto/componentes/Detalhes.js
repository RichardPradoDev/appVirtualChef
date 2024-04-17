import React from 'react';
import { StyleSheet, Image, View, Alert } from 'react-native';

import Texto from '../../../componentes/Texto' //Componente de Exibição de Texto
import Botao from '../../../componentes/Botao';
import logop from '../../../../assets/logop.png';

export default function Detalhes({ nome, detalhes, preco, textoBotao }) {
    return <View style={styles.produto}>
        <View style={styles.logo}>
            <Image style={styles.logop} source={logop} resizeMode='contain' />
            <Texto style={styles.nome}>{nome}</Texto>
        </View>
        <Texto style={styles.descricao}>{detalhes}</Texto>
        <Texto style={styles.preco}>{preco}</Texto>
        <Botao source={textoBotao} textoBotao={"Adicionar na lista de Desejos"} acaoBotao={() => Alert.alert("Em breve", "Estamos preparando uma novidade para você")} />
    </View>
}

const styles = StyleSheet.create({
    nome: {
        color: "black",
        fontSize: 20,
        textAlign: "center",
        margin: 8,
        fontWeight: 'bold'
    },
    descricao: {
        color: "black",
        fontSize: 18,
        textAlign: "center"
    },
    logo: {
        flexDirection: 'row',
    },
    logop: {
        width: 50,
        height: 50,
    },

    preco: {
        fontSize: 18,
        color: 'red',
        width: '100%',
        textAlign: 'center'
    },

});