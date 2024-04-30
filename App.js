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


