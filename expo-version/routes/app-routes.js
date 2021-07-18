import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MeuPerfil from '../screens/MeuPerfil';
import TelaLogin from '../screens/TelaLogin'
import TelaInicial from '../screens/TelaInicial'
import Produtos from '../screens/Produtos'
import Logout from '../screens/Logout'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Entypo } from '@expo/vector-icons'; 
import {useAuth} from '../contexts/auth'

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
 
  return (
    <Tab.Navigator tabBarOptions={
      {
		  activeTintColor: '#1da1f3',
		  inactiveTintColor: 'white',
      style: {
        backgroundColor: '#002035',
      },
	    }}
  
      >
      <Tab.Screen name='TelaInicial' component={TelaInicial} options={{
          tabBarLabel: 'home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name='MeuPerfil' component={MeuPerfil} options={{
          tabBarLabel: 'meu perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen name='Produtos' component={Produtos} options={{
          tabBarLabel: 'produtos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name='Logout' component={Logout} options={{
          tabBarLabel: 'logout',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="login" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}