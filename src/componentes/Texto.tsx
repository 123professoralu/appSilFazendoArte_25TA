import React from "react";
import {Text, StyleSheet} from "react-native";

export default function Texto({children, style}:any){

    //Determina a estilização padrão do texto
    let estilo = estilos.padrao;

    //Verifica se o texto é para ser exibido em Negrito
    if(style?.fontWeight==="bold"){
        estilo=estilos.negrito;
    }

    return <Text style={[estilo, style]}>{children}</Text>
}

const estilos = StyleSheet.create({
    padrao: {
        fontFamily: "FonteRegular",
        fontSize: 16,
        textAlign: "justify",
        lineHeight: 25,
    },
    negrito: {
        fontFamily: "FonteBold",
        fontSize: 16,
        textAlign: "justify",
        lineHeight: 25,
    }
})