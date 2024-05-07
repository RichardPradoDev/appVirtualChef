<<<<<<< HEAD
import { useFonts, Raleway_300Light, Raleway_700Bold } from "@expo-google-fonts/raleway";

import { View } from 'react-native';

import Produto from './src/telas/Produto/Index'
import mock from './src/mocks/produto'

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

  return <Produto {...mock} />

}


=======
import { useFonts, Raleway_300Light, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { View } from 'react-native';


import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Produto from './src/telas/Produto/'
import mock from './src/mocks/produto';

function MenuKit() {
  return <Produto {...mock} />
}

const Tab = createBottomTabNavigator();

function TabsMenu() {
  return <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Carrinho") {
                iconName = focused
                  ? 'basket'
                  : 'basket-outline';
              } else if (route.name === "Sobre nós") {
                iconName = focused
                  ? 'bulb'
                  : 'bulb-outline';
              } else if (route.name === "Produtos") {
                iconName = focused
                  ? 'list'
                  : 'list-outline';
              } else if (route.name === "Lista de Desejos") {
                iconName = focused
                  ? 'game-controller'
                  : 'game-controller-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: '#01426c',
            tabBarInactiveTintColor: 'gray',
            tabBarHideOnKeyboard: true,
            headerShown: false,
          })}>
          <Tab.Screen name='Carrinho' component={MenuKit} />
          <Tab.Screen name='Sobre nós' component={MenuKit} />
          <Tab.Screen name='Produtos' component={MenuKit} />
          <Tab.Screen name='Lista de Desejos' component={MenuKit} />
        </Tab.Navigator>
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
        </NavigationContainer>
}


>>>>>>> 4238d95979d3c472f681ee817866f51cb4b836e2
