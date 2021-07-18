import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import {useAuth} from '../contexts/auth'

export default function TelaInicial({navigation}){

  const {Logout} = useAuth();
  const handleLogout = () =>{
    Logout();
  }

  return(
    <View style={styles.container} >
        <ImageBackground source={require('../assets/splash-screen.png')} style={styles.imagem} resizeMode="cover">
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
        <Text style={styles.texto}>A loja numero 1 dos ratões da tecnologia!</Text>
        <Text style={styles.texto}>Promoções todos os dias</Text>
        <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Produtos')}>
        <Text style={{color:'white',fontSize:18,textAlign:'center'}}> Ver Ofertas  </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={handleLogout}>
      <Text style={{color:'#002035',fontSize:18,textAlign:'center'}}> logout </Text>
      </TouchableOpacity>
      </View>
    </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagem: {
    flex: 1,
    justifyContent: "center"
  },
  logo: {
    width: 230,
    height: 60,
    margin:20,
    alignSelf: 'center',
    marginBottom: 150
  },
  texto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    textShadowColor: '#000000',
    marginTop: 30,
  },
  buttons:{
    margin:10,
    alignItems: 'center',
  },
   button:{
    borderRadius:20,
    borderColor:'#1da1f3',
    borderWidth:2,
    backgroundColor:'#002035',
    width:250,
    padding:5,
    margin:5,
  },
   button2:{
    borderRadius:20,
    borderWidth:2,
    backgroundColor:'#1da1f3',
    width:180,
    padding:5,
    margin:5,
  },
})