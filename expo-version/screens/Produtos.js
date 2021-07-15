import React, {
  useState,
  useEffect
} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Text,
  Alert,
} from 'react-native';
import Produto from '../components/Produto';
import axios from 'axios';
import api from '../services/api'

export default function Produtos({
  navigation
}) {

  const [produtos, setProdutos] = useState([]);
  const [nome,setNome] = useState('');
  const [quantidade,setQuantidade] = useState('');
  const [preco,setPreco] = useState('');
  const [descricao,setDescricao] = useState('');

  useEffect(() => {
    getProdutos();
  }, []);

  const getProdutos = () => {
    api.get('/produtos')
      .then(
        (response) => {
          setProdutos(response.data);
        }).catch((error) => {
        console.log(error);
      });
  }

  const insertProduto = (nome,quantidade,preco) => {
   const produto = {
     nome: nome,
     quantidadeEmEstoque: quantidade,
     preco: preco,
     descricao: "",
   };
   api.post('/produtos',produto)
      .then(
        (response) => {
          setProdutos([...produtos,produto]);
          Alert.alert('Produto adicionado!')
        }).catch((error) => {
          Alert.alert('Falha ao adicionar produto!')
      });
  }

  return ( 
    <View style={{marginTop:30,flex:1,alignItems:'center',justifyContent:'center'}}>
      <TextInput onTextChange={(texto)=> setNome(texto) } placeholder='Nome'/>
      <TextInput onTextChange={(texto)=> setQuantidade(texto) } placeholder='Quantidade'/>
      <TextInput onTextChange={(texto)=> setPreco(texto) } placeholder='Preço'/>
      <TextInput onTextChange={(texto)=> setDescricao(texto) } placeholder='Descrição'/>
    <ScrollView> 
      <TouchableOpacity onPress={() => insertProduto(nome,quantidade,preco)}>
        <View style={{backgroundColor:'pink'}}>
        <Text> Benção da Maria </Text>
        </View>
      </TouchableOpacity>
     {produtos.map(
          (produto) => (
            <Produto
            nome = {produto.nome}
            preco = {produto.preco.toString()}
            quantidade = {produto.quantidadeEmEstoque.toString()}
            />
          ))
      } 
      </ScrollView> 
      </View>
    )
  }