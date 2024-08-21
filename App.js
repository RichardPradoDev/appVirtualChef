import React, { useState, useEffect } from "react";

import {
    useFonts,
    Raleway_300Light, Raleway_700Bold
}
    from "@expo-google-fonts/raleway";
import { View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Audio } from "expo-av";
import { StyleSheet } from "react-native";

import Texto from './src/componentes/Texto.js'
import Kit from './src/telas/Kits/Index.js'
import Produto from './src/telas/Produto/Index.js'
import Sobre from './src/telas/Sobre'
import mock from './src/mocks/kit.js'
import mock_sobre from './src/mocks/sobre'


function MenuKit() {
    return <Kit {...mock} />
}

function MenuSobre() {
    return <Sobre {...mock_sobre} />
}


function MenuProduto() {
    return <Produto {...mock_produto} />
}


function MenuAudio() {
    const [audioStatus, setAudioStatus] = useState(false);
    const [sound, setSound] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            console.log('status', audioStatus);
            if (audioStatus) {
                setLoading(true);
                const { sound } = await Audio.Sound.createAsync(require('./assets/Reggae.mp3'));
                setSound(sound);
                try {
                    await sound.playAsync();
                } catch (e) {
                    console.log(e);
                }
                setLoading(false);
            } else {
                if (sound) {
                    try {
                        await sound.stopAsync();
                        await sound.unloadAsync();
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
        })();
    }, [audioStatus]);

    return <TouchableOpacity onPress={() => { if (!loading) { setAudioStatus(!audioStatus); } }}>
        <Texto style={styles.OnOff}>🎧</Texto>
    </TouchableOpacity>

}
const styles = StyleSheet.create({
    OnOff: {
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "white",
        fontWeight: "bold",
        marginLeft: 161,
        fontSize: 10,
        borderWidth: 1,
        borderColor: 'black',
        height: 22,
        width: 82,
        marginTop: 3,
        marginBottom: 3,
        borderRadius: 30,
        lineHeight: 22,
    },
})



const tab = createBottomTabNavigator();

function TabsMenu() {
    return <tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Kit") {
                    iconName = focused
                        ? 'basket'
                        : 'basket-outline';
                } else if (route.name === "Sobre nós") {
                    iconName = focused
                        ? 'home'
                        : 'home-outline';
                } else if (route.name === "Produtos") {
                    iconName = focused
                        ? 'list'
                        : 'list-outline';
                } else if (route.name === "Lista de Desejos") {
                    iconName = focused
                        ? 'heart'
                        : 'heart-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: '#01426c',
            tabBarInactiveTintColor: 'gray',
            tabBarHideOnKeyboard: true,
            headerShown: false,
        })}>
        <tab.Screen name='Sobre nós' component={MenuSobre} />
        <tab.Screen name='Kit' component={MenuKit} />
        <tab.Screen name='Produtos' component={MenuProduto} />
        <tab.Screen name='Lista de Desejos' component={MenuKit} />
    </tab.Navigator>
}

export default function App() {
    //Carrega a fonte para o projeto
    const [fonteCarregada] = useFonts({
        "ralewayP": Raleway_300Light,
        "ralewayG": Raleway_700Bold,
    })

    //Checa se as fontes já foram carregadas
    if (!fonteCarregada) {
        return <View />
    }

    return <NavigationContainer>
        <TabsMenu />
        <MenuAudio />
    </NavigationContainer>
}

