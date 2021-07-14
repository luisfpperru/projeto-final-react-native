import React from 'react';
import { Text, View, Button } from 'react-native';

export default function MeuPerfil({navigation}){
  return(
    <View>
      <Text> Essa eh o Perfil   </Text>
      <Button title="Ir para Home" onPress={()=> navigation.navigate('TelaInicial')}/>
    </View>
  )
}