import React, {useState,useEffect,useRef} from 'react';
import { Text, View, Image,StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Ionicons, Entypo, Foundation   } from '@expo/vector-icons'; 
import {useAuth} from '../contexts/auth'

export default function TelaLogin({navigation}){

  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');
  const [nome,setNome] = useState('');
  const [telefone,setTelefone] = useState('');
  const [cpf,setCpf] = useState('');
  const [nascimento,setNascimento] = useState('');

  const { Login } = useAuth();
  const handleLogin = () =>{
    Login(email,senha);
  }

  const criarCadastro = () => {
    api.post('/clientes',cliente)
       .then(
         (response) => {
           Alert.alert('Cadastro concluido!')
         }).catch((error) => {
           Alert.alert('Cadastro não pode ser realizado')
       });
   }

  const modalRef = useRef(null);
  const onOpen = () => {
    const modal = modalRef.current;
    if (modal) {
      modal.open();
    }
  };
  
  return(
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo}/>
      <TextInput 
      style={styles.campo} 
      placeholder='email'
      onChangeText={(texto) => setEmail(texto)}
      />
      <TextInput 
      style={styles.campo} 
      placeholder='senha'
      onChangeText={(texto) => setSenha(texto)}
      secureTextEntry/>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={{color:'white',fontSize:18,textAlign:'center'}}> login </Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.button2} onPress={onOpen}>
        <Text style={{color:'#002035',fontSize:18,textAlign:'center'}}> cadastrar-se </Text>
      </TouchableOpacity>

      <Modalize style={styles.container} ref={modalRef}> 
      <View style={styles.modal}>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Ionicons name="person" size={15} color="#6b6b6b" /> Nome</Text>
        <TextInput placeholder='Nome' style={styles.dados}/>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Entypo name="email" size={15} color="#6b6b6b" /> Email</Text>
        <TextInput placeholder='usuario@email.com' style={styles.dados}/>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Entypo name="text-document-inverted" size={15} color="#6b6b6b" /> CPF</Text>
        <TextInput keyboardType = 'numeric' placeholder='000.000.000-00' style={styles.dados}/>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.tipoDeDado}><Entypo name="lock" size={15} color="#6b6b6b" /> Senha </Text>
        <TextInput placeholder='senha' style={styles.dados}/>
      </View>
      <TouchableOpacity style={styles.button2} onPress={()=> {}}>
        <Text style={{color:'#002035',fontSize:18,textAlign:'center'}}> Criar conta </Text>
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
});