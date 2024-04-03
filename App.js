import { useFonts, Raleway_300Light, Raleway_700Bold } from "@expo-google-fonts/raleway";

import { View } from 'react-native';
import Produto from './src/telas/Produto/Index'


export default function App() {
  const [fonteCarregada] = useFonts({
    "ralewayP": Raleway_300Light,
    "ralewayG": Raleway_700Bold,

  });

  if (fonteCarregada) {
    return <View></View>
  }

  return <Produto />

};


