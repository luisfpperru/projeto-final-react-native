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
  Text,
  Alert,
  StyleSheet,
} from 'react-native';
import Produto from '../components/Produto';
import api from '../services/api'
import { Modalize } from 'react-native-modalize';
import { Entypo,FontAwesome5,SimpleLineIcons } from '@expo/vector-icons'; 
import { FAB } from 'react-native-paper';


export default function Produtos({
  navigation
}) {

  const [produtos, setProdutos] = useState([]);

  const [nome,setNome] = useState('');
  const [quantidadeEmEstoque,setQuantidadeEmEstoque] = useState('');
  const [preco,setPreco] = useState('');
  const [descricao,setDescricao] = useState('');
  const [produtoAtual,setProdutoAtual] = useState([]);

  useEffect(() => {
    getProdutos();
  }, []);

  const getProdutos = () => {
     api.get('/produtos')
      .then(
        (response) => {
          setProdutos(response.data);
        }).catch((error) => {
          Alert.alert('Falha ao carregar os produtos!')
        });
  }

  const insertProduto = () => {
    let produto = {nome,descricao,preco,quantidadeEmEstoque};
    api.post('/produtos',produto)
       .then( () => {
           console.log(produto);
           Alert.alert('Produto adicionado!');
           setProdutos([...produtos,produto])
       }).catch( error => {
           Alert.alert('Falha ao adicionar produto!')
       });
   }

   const editarProduto = () => {
    let produto = {nome,descricao,preco,quantidadeEmEstoque};
    api.put(`/produtos/id/${produtoAtual.id}`,produto)
       .then(
         (response) => {
           Alert.alert('Produto editado!')
           getProdutos()
         }).catch((error) => {
           Alert.alert('Falha ao editar o produto!')
       });
   }

   const deletarProduto = (produtoId) => {
     
    api.delete(`/produtos/id/${produtoId}`)
       .then(
         (response) => {
           Alert.alert('Produto deletado!')
           setProdutos(produtos.filter( (produto) => produto.id !== produtoId));
         }).catch((error) => {
           Alert.alert('Produto não pode ser deletado')
           console.log(error);
       });
   }

  const modalRef = useRef(null);

  const onClose = () => {
    insertProduto()
    modalRef.current?.close();
  };

  const modalRefDescricao = useRef(null);

  const onCloseDescricao = () => {
    editarProduto()
    modalRefDescricao.current?.close();
  };

  return ( 
    <View style={{marginTop:30,flex:1,alignItems:'center',justifyContent:'center'}}>
    <FAB
        style={styles.fab}
        icon="plus"
        color='white'
        onPress={()=>modalRef.current?.open()}
    />
    <ScrollView> 
      
     {produtos.map(
          (produto) => (
            <Produto
            nome = {produto.nome}
            preco = {produto.preco.toString()}
            quantidade = {produto.quantidadeEmEstoque.toString()}
            onPress={() => deletarProduto(produto.id)}
            onPressModal={()=> {modalRefDescricao.current?.open();setProdutoAtual(produto)}}
            />
          ))
      } 
      </ScrollView> 

      <Modalize style={styles.container} ref={modalRef}> 
      <View style={styles.modal}>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Entypo name="price-tag" size={15} color="#6b6b6b" /> Nome </Text>
        <TextInput onChangeText={(texto)=> setNome(texto) } style={styles.dados}/>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><FontAwesome5 name="shopping-basket" size={15} color="#6b6b6b" /> Quantidade </Text>
        <TextInput keyboardType = 'numeric' onChangeText={(texto)=> setQuantidadeEmEstoque(texto) } style={styles.dados}/>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><FontAwesome5 name="money-bill-wave" size={15} color="#6b6b6b" /> Preço </Text>
        <TextInput keyboardType = 'numeric' onChangeText={(texto)=> setPreco(texto) } style={styles.dados}/>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><SimpleLineIcons name="note" size={15} color="#6b6b6b" /> Descrição </Text>
        <TextInput multiline numberOfLines={4} onChangeText={(texto)=> setDescricao(texto) } style={styles.dados}/>
      </View>
        <TouchableOpacity style={styles.button2} onPress={onClose}>
        <Text style={{color:'#002035',fontSize:18,textAlign:'center'}}> Adicionar </Text>
        </TouchableOpacity>
      </View>
      </Modalize>

      <Modalize style={styles.container} ref={modalRefDescricao}> 
      <View style={styles.modal}>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Entypo name="price-tag" size={15} color="#6b6b6b" /> Nome </Text>
        <TextInput onChangeText={(texto)=> setNome(texto) } style={styles.dados}>
          {produtoAtual.nome}
        </TextInput>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><FontAwesome5 name="shopping-basket" size={15} color="#6b6b6b" /> Quantidade </Text>
        <TextInput keyboardType = 'numeric' onChangeText={(texto)=> setQuantidadeEmEstoque(texto) } style={styles.dados}>
          {produtoAtual.quantidadeEmEstoque}
        </TextInput>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><FontAwesome5 name="money-bill-wave" size={15} color="#6b6b6b" /> Preço </Text>
        <TextInput keyboardType = 'numeric' onChangeText={(texto)=> setPreco(texto) } style={styles.dados}>
          {produtoAtual.preco}
        </TextInput>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><SimpleLineIcons name="note" size={15} color="#6b6b6b" /> Descrição </Text>
        <TextInput multiline numberOfLines={4} onChangeText={(texto)=> setDescricao(texto) } style={styles.dados}>
        {produtoAtual.descricao}
        </TextInput>
      </View>
        <TouchableOpacity style={styles.button2} onPress={onCloseDescricao}>
        <Text style={{color:'#002035',fontSize:18,textAlign:'center'}}> Atualizar </Text>
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
      },
      fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor:'#1da1f3'
      },
});