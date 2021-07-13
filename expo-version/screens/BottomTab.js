import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import MeuPerfil from './MeuPerfil';
import Login from './Login'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Entypo } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <NavigationContainer>
    <Tab.Navigator tabBarOptions={
      {
		  activeTintColor: '#1da1f3',
		  inactiveTintColor: 'white',
      style: {
        backgroundColor: '#002035',
      },
	    }}
  
      >
      <Tab.Screen name='Login' component={Login} options={{
          tabBarLabel: 'login',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="login" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name='Home' component={Home} options={{
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
    </Tab.Navigator>
  </NavigationContainer>
  );
}