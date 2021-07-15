import React, {
  useState,
  useEffect
} from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import Produto from '../components/Produto';
import api from '../services/api';

export default function Produtos({
  navigation
}) {

  const [produtos, setProdutos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProdutos();
  }, []);

  const getProdutos = () => {
    setIsLoading(true);
    api.get('/produtos')
      .then(
        (response) => {
          setProdutos(response.data);
          setIsLoading(false);
        }).catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }

  return ( 
    <View>
    <ScrollView> 
      {(isLoading) ?
      <View >
      <ActivityIndicator size = 'large' color = '#999' />
      </View> 
      :
        produtos.map(
          (produto) => {
            <Produto
            nome = {produto.nome}
            preco = {produto.preco}
            quantidade = {produto.quantidadeEmEstoque}
            />
          })
        } 
        </ScrollView> 
        </View>
    )
  }