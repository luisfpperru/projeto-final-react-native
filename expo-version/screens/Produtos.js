import React, {
  useState,
  useEffect,
  useRef,
} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
  Text,
  Alert,
  Modal,
  StyleSheet,
} from 'react-native';
import Produto from '../components/Produto';
import axios from 'axios';
import api from '../services/api'
import { Modalize } from 'react-native-modalize';
import { Ionicons, Entypo, Foundation   } from '@expo/vector-icons'; 


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

  const modalRef = useRef(null);
  const onOpen = () => {
    const modal = modalRef.current;
    if (modal) {
      modal.open();
    }
  };


  return ( 
    <View style={{marginTop:30,flex:1,alignItems:'center',justifyContent:'center'}}>
       <TouchableOpacity style={styles.button2} onPress={onOpen}>
       <Text style={{color:'#002035',fontSize:18,textAlign:'center'}}> Adicionar produto </Text>
         </TouchableOpacity>
    <ScrollView> 
      
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

      <Modalize style={styles.container} ref={modalRef}> 
      <View style={styles.modal}>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Entypo name="calendar" size={15} color="#6b6b6b" /> Nome </Text>
        <TextInput onTextChange={(texto)=> setNome(texto) } style={styles.dados}/>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Entypo name="calendar" size={15} color="#6b6b6b" /> Quantidade </Text>
        <TextInput keyboardType = 'numeric' onTextChange={(texto)=> setQuantidade(texto) } style={styles.dados}/>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Entypo name="calendar" size={15} color="#6b6b6b" /> Preço </Text>
        <TextInput keyboardType = 'numeric' onTextChange={(texto)=> setPreco(texto) } style={styles.dados}/>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Entypo name="calendar" size={15} color="#6b6b6b" /> Descrição </Text>
        <TextInput onTextChange={(texto)=> setDescricao(texto) } style={styles.dados}/>
      </View>
        <TouchableOpacity style={styles.button2} onPress={() => insertProduto(nome,quantidade,preco)}>
        <Text style={{color:'#002035',fontSize:18,textAlign:'center'}}> Adicionar </Text>
        </TouchableOpacity>
      </View>
      </Modalize>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingTop: 50,
      backgroundColor: 'white',
      alignItems:'center',
      justifyContent:'center',
      margin:10,
    },
    logo: {
      width: 230,
      height: 60,
      margin:20,
    },
    campo:{
      padding:6,
      borderRadius: 20,
      borderWidth:1,
      borderColor:'#bebfc1',
      width:250,
      margin:5,
    },
    button:{
      borderRadius:20,
      borderColor:'#1da1f3',
      borderWidth:2,
      backgroundColor:'#002035',
      width:250,
      padding:5,
      textAlign:'center',
      margin:20,
    },
     button2:{
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
      }
});