import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from '../screens/TelaLogin';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator screenOptions={{headerShown: false}}>
    <AuthStack.Screen name="Login" component={TelaLogin} />
  </AuthStack.Navigator>
);

export default AuthRoutes;