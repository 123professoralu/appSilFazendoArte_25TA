import React from "react";
import { useFonts, 
         Montserrat_400Regular, 
         Montserrat_700Bold } 
         from "@expo-google-fonts/montserrat";
import { View } from "react-native";

import SobreNos from "./src/telas/SobreNos";

export default function App() {

  //Configuração da fonte para o app
  const [fonteCarregada] = useFonts({"FonteRegular": Montserrat_400Regular,
                                     "FonteBold": Montserrat_700Bold});

  //Verifica se a fonte foi carregada, se não, não exibe nada
  if(!fonteCarregada){
    return <View/>
  }

  return <SobreNos/>
}