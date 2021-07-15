import React, {useState,useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, Entypo, Foundation   } from '@expo/vector-icons'; 
import axios from 'axios';

export default function MeuPerfil({navigation}){
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [nascimento, setNascimento] = useState('');

  useEffect(() => {
    getCliente();
  }, []);

  const getCliente = () => {
    axios.get('http://localhost:8080/api/clientes/id/5')
      .then(
        (response) => {
          let cliente = response.data;
          setNome(cliente.nome);
          setEndereco(cliente.endereco.rua);
          setTelefone(cliente.telefone);
          setEmail(cliente.email);
          setCpf(cliente.cpfOuCnpf);
          setNascimento(cliente.dataDeNascimento.toISOString().substring(0,10));
          console.log('Dados cliente');
        }).catch((error) => {
        console.log(error);
      });
  }

  return(
    <View style={styles.container}>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Ionicons name="person" size={15} color="#6b6b6b" /> Nome</Text>
        <Text style={styles.dados}>{nome}</Text>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Entypo name="address" size={15} color="#6b6b6b" /> Endereço</Text>
        <Text style={styles.dados}>{endereco}</Text>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Foundation name="telephone" size={15} color="#6b6b6b" /> Telefone</Text>
        <Text style={styles.dados}>{telefone}</Text>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Entypo name="email" size={15} color="#6b6b6b" /> email</Text>
        <Text style={styles.dados}>{email}</Text>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Entypo name="text-document-inverted" size={15} color="#6b6b6b" /> CPF</Text>
        <Text style={styles.dados}>{cpf}</Text>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Entypo name="calendar" size={15} color="#6b6b6b" /> Data de Nascimento</Text>
        <Text style={styles.dados}>{nascimento}</Text>
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