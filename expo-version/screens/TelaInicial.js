import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

export default function TelaInicial({navigation}){
  return(
    <View style={styles.container} >
        <ImageBackground source={require('../assets/splash-screen.png')} style={styles.imagem} resizeMode="cover">
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
        <Text style={styles.texto}>A loja numero 1 dos ratões da tecnologia!</Text>
        <Text style={styles.texto}>Promoções todos os dias</Text>
        <View style={styles.buttons}>
        <br/>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Home')}>
        <Text style={{color:'white',fontSize:18}}> login </Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.button2} onPress={()=> navigation.navigate('Home')}>
        <Text style={{color:'#002035',fontSize:18}}> cadastrar-se </Text>
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
    textAlign: 'center',
  },
   button:{
    borderRadius:20,
    borderColor:'#1da1f3',
    borderWidth:2,
    backgroundColor:'#002035',
    width:250,
    padding:5,
    textAlign:'center',
    margin:5,
  },
   button2:{
    borderRadius:20,
    borderWidth:2,
    backgroundColor:'#1da1f3',
    width:180,
    padding:5,
    textAlign:'center',
    margin:5,
  },
})