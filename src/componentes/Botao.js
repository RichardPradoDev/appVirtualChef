import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Texto from "./Texto";

export default function Botao({ textoBotao, acaoBotao }) {
    return (
        <TouchableOpacity style={[styles.botao]} onPress={acaoBotao}>
            <Texto style={styles.botaoTexto}>{textoBotao}</Texto>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    botao: {
        marginTop: 12,
        backgroundColor: "red",
        paddingVertical: 16,
        borderRadius: 6,
        width: 320,
        margin: 40,
    },
    botaoTexto: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 18,
        lineHeight: 26,
        fontWeight: "bold",
    }
});
