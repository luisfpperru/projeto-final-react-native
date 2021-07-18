import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import { Alert } from 'react-native';

const AuthContext = createContext({
  usuarioLogado: false,
  usuario: {},
  loading: true,
  Login: () => {},
  Logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function CarregarDados() { 
      const storageUser = await AsyncStorage.getItem('@usuario');
      const storageToken = await AsyncStorage.getItem('@token');

      if (storageUser && storageToken) {
        setUsuario(JSON.parse(storageUser));
        api.defaults.headers.Authorization = storageToken;
      }
      setLoading(false);
    }
    CarregarDados();
  }, []);

  function Login(email,senha) {
    api.post('/login', {email,senha})
    .then((response)=> {
      setUsuario(response.data.cliente);
      AsyncStorage.setItem('@usuario', JSON.stringify(response.data.cliente));
      AsyncStorage.setItem('@token', response.data.token);
      api.defaults.headers.Authorization = response.data.token;
    }).catch(()=> Alert.alert('Usuário não foi encontrado!'));
  }

  function Logout() {
    AsyncStorage.multiRemove(['@usuario','@token']).then(() => {
      setUsuario(null);
      {//AsyncStorage.multiRemove(["@token","@usuario"])
      }
    });
  }

  return (
    <AuthContext.Provider
      value={{ usuarioLogado: Boolean(usuario), usuario, loading, Login, Logout }}
    >{children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}