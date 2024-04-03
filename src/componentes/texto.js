import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({ children, style }) {

    //Determina a formatação padrão do componente
    let estilo = estilos.texto;
    //Verifica se deve exibir em negrito 
    if (style.fontWeight == "bold") {
        estilo = estilos.textoNegrito;
    }

    return <Text style={[style, estilos.texto]}>{children}</Text>;
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "ralewayP",
    },
    textoNegrito: {
        fontFamily: "ralewayG",
    }
});
