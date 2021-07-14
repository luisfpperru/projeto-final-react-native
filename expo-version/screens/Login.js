import React from 'react';
import { Text, View, Button, Image,StyleSheet, TextInput,TouchableOpacity } from 'react-native';

export default function Login({navigation}){
  return(
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo}/>
      <TextInput style={styles.campo} placeholder='email'/>
      <TextInput style={styles.campo} placeholder='senha' secureTextEntry/>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Home')}>
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