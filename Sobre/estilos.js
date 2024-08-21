import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    logo: {
        width: 300,
        height: 300,
        alignSelf: "center",

    },
    sobre: {
        backgroundColor: "#E9E3D5",
        paddingVertical: 8,
        paddingHorizontal: 16,

    },
    textoSobre: {
        fontSize: 20,
        lineHeight: 26,
        marginBottom: 10,
        color: "black",
        textAlign: "justify",
    },
    video: {
        width: '100%',
        height: 200, // Certifique-se de que a altura está definida
        marginBottom: 20,
    },
    Input: {
        lineHeight: 30,
        backgroundColor: 'white',
    },

})

export default styles;