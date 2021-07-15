import React, {useEffect} from 'react';
import { Text, View, Image,StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import { useForm } from 'react-hook-form';
import * as yup from "yup";

export default function Login({navigation}){

  const { register, setValue, handleSubmit, error } = useForm({ validationSchema: fieldsValidationSchema })

  useEffect(() => {
    register('email')
    register('senha')
  }, [register]);

  const onSubmit = (data) => alert("Usuário com email"+data.email+" cadastrado!")

  const fieldsValidationSchema = yup.object().shape({
    email: yup
    .string()
    .required('O email não pode ser vazio')
    .email('Digite um email válido'),
    senha: yup
    .string()
    .required('A senha não pode ser vazia')
    .min(6, 'A senha deve conter pelo menos 6 dígitos')
  })

  return(
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo}/>
      <TextInput 
      style={styles.campo} 
      placeholder='email'
      error={error?.email}
      onChangeText={texto => setValue('email', texto)}
      />
      <TextInput 
      style={styles.campo} 
      placeholder='senha'
      error={error?.senha}
      onChangeText={texto => setValue('senha', texto)}
      secureTextEntry/>
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={{color:'white',fontSize:18,textAlign:'center'}}> login </Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.button2} onPress={()=> navigation.navigate('Home')}>
        <Text style={{color:'#002035',fontSize:18,textAlign:'center'}}> cadastrar-se </Text>
      </TouchableOpacity>
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
});