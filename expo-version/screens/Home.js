import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Home({navigation}){
  return(
    <View>
      <Text> Essa é a Home! </Text>
      <Button 
        title='Ir para Perfil' 
        onPress={()=> navigation.navigate('MeuPerfil')}/>
    </View>
  )
}