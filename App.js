import { View } from 'react-native';
import ProdutoItem from './src/telas/ProdutoItem.js'
import {
  useFonts, Raleway_300Light, Raleway_500Medium, Raleway_700Bold
} from "@expo-google-fonts/raleway";

export default function App() {
  const [fonteCarregada] = useFonts({
    "ralewayP": Raleway_300Light,
    "ralewayM": Raleway_500Medium,
    "ralewayG": Raleway_700Bold,
  })
  if (fonteCarregada) {
    return <View></View>
  }
  return < ProdutoItem />

}


