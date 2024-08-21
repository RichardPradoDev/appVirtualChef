import React from "react";
import { ScrollView, Image, View } from "react-native";
import { Video } from 'expo-av';

import Texto from '../../componentes/Texto'
import Styles from './estilos'
import videoHamburger from '../../../assets/videoHamburguer.mp4';


export default function Index({ textos }) {


    return <ScrollView style={Styles.sobre}>
        <Image source={textos.logo} style={Styles.logo} resizeMode="contain"></Image>
        <Texto style={Styles.textoSobre}>{textos.historia}</Texto>
        <View>
            <Video
                source={videoHamburger} // Use o import aqui
                style={Styles.video}
                useNativeControls
                resizeMode="contain"
                isLooping
                shouldPlay
            />
        </View>
    </ScrollView>
}