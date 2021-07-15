import React from 'react';
import {StyleSheet} from 'react-native';
import { Text, View, Image } from 'react-native';

export default function Produto({nome,quantidade,preco}){
  return(
    <View style={styles.pagina}>
      <View  style={styles.container}>
        <View>
        </View>
          <View style={styles.imagemBackground}>
          <Image
          style={styles.imagemProduto}
          source={require(`../assets/template_image.png`)}/>
          </View>
          <Text style={styles.titleProduto}>{nome}</Text>
        <View style={styles.detailsProduto}>
          <Text style={styles.quantidade}>Em Estoque : {quantidade}</Text>
          <Text style={styles.preco}>R$ {preco}</Text>
        </View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  pagina: {
    marginTop: 20,
    padding: 10
  },
  container: {
    borderWidth: 2,
    borderColor: '#002035',
    borderRadius: 20,
    marginBottom: 5,
    padding: 5
  },
  titleProduto: {
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center',
    color: '#002035'
  },
  detailsProduto: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  estoque: {
    color: '#002035',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 15,
    alignSelf: 'center'
  },
  preco: {
    color: '#fff',
    backgroundColor: '#002035',
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 25,
    borderRadius: 20,
    paddingHorizontal: 10
  },
  imagemProduto: {
    borderRadius: 10,
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    overflow: "hidden",
    borderWidth: 0,
    borderColor: '#002035',
  },
  imagemBackground: {
    borderRadius: 20,
    borderWidth: 0,
    borderColor: '#002035',
    backgroundColor: '#002035'
  }

});