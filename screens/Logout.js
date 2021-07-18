import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {useAuth} from '../contexts/auth'

export default function Logout({navigation}){

    const {Logout} = useAuth();
    const handleLogout = () =>{
      Logout();
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Deseja mesmo fazer Logout?</Text>
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={{color:'white',fontSize:25,textAlign:'center'}}> logout </Text>
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
    button:{
        borderRadius:20,
        borderWidth:2,
        backgroundColor:'#bf1408',
        width:180,
        padding:5,
        textAlign:'center',
        margin:20,
    },
    titulo: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25
    }
})