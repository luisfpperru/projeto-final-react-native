import React, {useState,useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons, Entypo, Foundation   } from '@expo/vector-icons'; 
import api from '../services/api';
import {useAuth} from '../contexts/auth'

export default function MeuPerfil({navigation}){
  const [cliente, setCliente] = useState([]);
  const { usuario} = useAuth();

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

  return(
    <View style={styles.container}>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Ionicons name="person" size={15} color="#6b6b6b" /> Nome</Text>
        <Text style={styles.dados}>{cliente.nome}</Text>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Entypo name="address" size={15} color="#6b6b6b" /> Endereço</Text>
        <Text style={styles.dados}>
          {//`${cliente.endereco.rua}, ${cliente.endereco.numero}, ${cliente.endereco.bairro}, ${cliente.endereco.cidade}, ${cliente.endereco.estado}`
          }
        </Text>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Foundation name="telephone" size={15} color="#6b6b6b" /> Telefone</Text>
        <Text style={styles.dados}>{cliente.telefone}</Text>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Entypo name="email" size={15} color="#6b6b6b" /> email</Text>
        <Text style={styles.dados}>{cliente.email}</Text>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Entypo name="text-document-inverted" size={15} color="#6b6b6b" /> CPF</Text>
        <Text style={styles.dados}>{cliente.cpfOuCnpj}</Text>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Entypo name="calendar" size={15} color="#6b6b6b" /> Data de Nascimento</Text>
        <Text style={styles.dados}>{cliente.dataDeNascimento}</Text>
      </View>
      {/* <Button title="Ir para Home" onPress={()=> navigation.navigate('TelaInicial')}/> */}
      <TouchableOpacity style={styles.button2} onPress={()=> navigation.navigate('Home')}>
        <Text style={{color:'#002035',fontSize:18,textAlign:'center'}}> editar dados </Text>
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
  button2:{
    borderRadius:20,
    borderWidth:2,
    backgroundColor:'#1da1f3',
    width:180,
    padding:5,
    textAlign:'center',
    margin:20,
    alignSelf: 'center'
  },
  categoria: {
    borderBottomColor: '#cfcfcf',
    borderBottomWidth: 1,
    marginBottom: 5
  }
})