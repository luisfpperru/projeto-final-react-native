import React from 'react';
import { Text, View, Button,ScrollView } from 'react-native';
import Produto from '../components/Produto';

export default function Produtos({navigation}){
  return(
    <View>
      <ScrollView>
      <Produto/>
      <Produto/>
      <Produto/>
      <Produto/>
      <Produto/>
      <Produto/>
      <Produto/>
      <Produto/>
      </ScrollView>
    </View>
  )
}