import React from "react";
import { useFonts, 
         Montserrat_400Regular, 
         Montserrat_700Bold } 
         from "@expo-google-fonts/montserrat";
import { TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAudioPlayer } from "expo-audio";

import SobreNos from "./src/telas/SobreNos";
import Texto from "./src/componentes/Texto";
import Styles from "./src/telas/estiloGeral";

//Menu PRODUTOS
import Produto from './src/telas/Produtos';
import MockProdutos from './src/mocks/listaProduto';

//Menu Perfil
import Perfil from './src/telas/Perfil';

function MenuProdutos(){
  return <Produto {...MockProdutos} />
}

//Função para execução do áudio
function MenuAudio(){
  const audioSource = require('./assets/acdc_highway_to_hell.mp3');
  const player = useAudioPlayer(audioSource);

  //Configuração o controle liga/desliga
  const onOff = () => {
    if(player.playing) {
      player.pause();
    } else {
      player.play();
    }
  }

  return <TouchableOpacity onPress={onOff}>
              <Texto style={Styles.botaoAudio}>🎧 On/Off</Texto>
          </TouchableOpacity>
}

//Configuração do Menu
const Tab = createBottomTabNavigator();

function Menu() {
  return <Tab.Navigator
              screenOptions={({route})=>({
                  tabBarIcon: ({focused, color, size})=>{
                    let iconName: any;

                    if(route.name ==="Sobre Nós"){
                      iconName = focused
                      ? 'paw'
                      : 'paw-outline';
                    } else if(route.name ==="Produtos"){
                      iconName = focused
                      ? 'list'
                      : 'list-outline';
                    }else if(route.name ==="Lista de Desejos"){
                      iconName = focused
                      ? 'heart'
                      : 'heart-outline';
                    } else if(route.name ==="Perfil"){
                      iconName = focused
                      ? 'person'
                      : 'person-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>
                  },
                  tabBarActiveTintColor:'purple',
                  tabBarInactiveTintColor: 'gray',
                  headerShown: false,
              })}>
            <Tab.Screen name="Sobre Nós" component={SobreNos} />
            <Tab.Screen name="Produtos" component={MenuProdutos} />
            <Tab.Screen name="Lista de Desejos" component={SobreNos} />
            <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
}

export default function App() {

  //Configuração da fonte para o app
  const [fonteCarregada] = useFonts({"FonteRegular": Montserrat_400Regular,
                                     "FonteBold": Montserrat_700Bold});

  //Verifica se a fonte foi carregada, se não, não exibe nada
  if(!fonteCarregada){
    return <View/>
  }

  return <NavigationContainer>
            <Menu />
            <MenuAudio/>
        </NavigationContainer>
}