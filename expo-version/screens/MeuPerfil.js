import React, {useState,useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native';
import { Ionicons, Entypo, Foundation   } from '@expo/vector-icons'; 
import api from '../services/api';
import {useAuth} from '../contexts/auth'

export default function MeuPerfil({navigation}){
  const [cliente, setCliente] = useState([]);
  const { usuario,Logout} = useAuth();

  useEffect(() => {
    getCliente();
  }, []);

  const getCliente = () => {
    api.get(`/clientes/id/${usuario.id}`)
      .then(
        (response) => {
          setCliente(response.data);
        }).catch((error) => {
        Alert.alert("Cliente não encontrado!");
      });
  }

  const editarCliente = () => {
    api.put(`/clientes/id/${usuario.id}`,cliente)
      .then(
        (response) => {
          Alert.alert("Dados do Cliente foram editados!");
        }).catch((error) => {
        Alert.alert("Dados do Cliente não puderam ser editados!");
      });
  }

  const deletarCliente = () => {
    api.delete(`/clientes/id/${usuario.id}`)
      .then(
        (response) => {
          Alert.alert("A conta do Cliente foi excluida!");
          Logout();
        }).catch((error) => {
        Alert.alert("Dados do Cliente não foram excluidos!");
      });
  }

  return(
    <View style={styles.container}>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Ionicons name="person" size={15} color="#6b6b6b" /> Nome</Text>
        <TextInput style={styles.dados}>{cliente.nome}</TextInput>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Entypo name="email" size={15} color="#6b6b6b" /> email</Text>
        <TextInput style={styles.dados}>{cliente.email}</TextInput>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Entypo name="text-document-inverted" size={15} color="#6b6b6b" /> CPF</Text>
        <TextInput 
          keyboardType = 'numeric' 
          style={styles.dados}
          onChangeText={()=>{}}
          >
          {cliente.cpfOuCnpj}
        </TextInput>
      </View>
      <TouchableOpacity style={styles.button} onPress={()=> editarCliente()}>
        <Text style={{color:'#002035',fontSize:18,textAlign:'center'}}> editar dados </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={()=> deletarCliente()}>
        <Text style={{color:'#002035',fontSize:18,textAlign:'center'}}> deletar conta </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
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
  button:{
    borderRadius:20,
    borderWidth:2,
    backgroundColor:'#1da1f3',
    width:180,
    padding:5,
    textAlign:'center',
    margin:10,
    alignSelf: 'center'
  },
  button2:{
    borderRadius:20,
    borderWidth:2,
    backgroundColor:'#bf1408',
    width:180,
    padding:5,
    textAlign:'center',
    margin:10,
    alignSelf: 'center'
  },
  categoria: {
    borderBottomColor: '#cfcfcf',
    borderBottomWidth: 1,
    marginBottom: 5
  }
})