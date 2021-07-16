import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';
import { Entypo,FontAwesome5,SimpleLineIcons } from '@expo/vector-icons'; 
import api from '../services/api'

export default function FormProduto(){

  const [nome,setNome] = useState('');
  const [quantidade,setQuantidade] = useState('');
  const [preco,setPreco] = useState('');
  const [descricao,setDescricao] = useState('');

  const insertProduto = (nome,quantidade,preco) => {
    let produto = {
      nome,
      quantidadeEmEstoque: quantidade,
      preco,
      descricao,
    };
    api.post('/produtos',produto)
       .then(
         (response) => {
          {//setProdutos([...produtos,produto]);
          }
           Alert.alert('Produto adicionado!')
         }).catch((error) => {
           Alert.alert('Falha ao adicionar produto!')
       });
   }

  return(
    <View style={styles.modal}>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Entypo name="price-tag" size={15} color="#6b6b6b" /> Nome </Text>
        <TextInput onTextChange={(texto)=> setNome(texto) } style={styles.dados}/>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><FontAwesome5 name="shopping-basket" size={15} color="#6b6b6b" /> Quantidade </Text>
        <TextInput keyboardType = 'numeric' onTextChange={(texto)=> setQuantidade(texto) } style={styles.dados}/>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><FontAwesome5 name="money-bill-wave" size={15} color="#6b6b6b" /> Preço </Text>
        <TextInput keyboardType = 'numeric' onTextChange={(texto)=> setPreco(texto) } style={styles.dados}/>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><SimpleLineIcons name="note" size={15} color="#6b6b6b" /> Descrição </Text>
        <TextInput onTextChange={(texto)=> setDescricao(texto) } style={styles.dados}/>
      </View>
        <TouchableOpacity style={styles.button} onPress={() => insertProduto(nome,quantidade,preco)}>
        <Text style={{color:'#002035',fontSize:18,textAlign:'center'}}> Adicionar </Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  button:{
    borderRadius:20,
    borderWidth:2,
    backgroundColor:'#1da1f3',
    width:180,
    padding:5,
    textAlign:'center',
    alignSelf:'center',
    margin:20,
  },
  modal: {
      flex: 1,
      marginTop: 30,
      backgroundColor: 'white',
      paddingHorizontal: 15
    },
    tipoDeDado: {
      color: '#6b6b6b',
      fontSize: 15,
    },
    dados: {
      color: '#000000',
      fontSize: 25
    },   
    categoria: {
      borderBottomColor: '#cfcfcf',
      borderBottomWidth: 1,
      marginBottom: 5
    },
});