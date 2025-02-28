import React from "react";
import {StatusBar, StyleSheet, View, Image} from "react-native";

import Texto from "../componentes/Texto";

export default function SobreNos(){
    return <View style={estilos.fundo}>
        <StatusBar />
        <Image source={require('../../assets/logo.png')} style={estilos.logo} resizeMode="contain"/>
        <Texto>Hello world!</Texto>
    </View>
}

const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: "purple",
    },
    logo: {
        width: 300,
        height: 300,
        alignSelf: "center",
    }
})

