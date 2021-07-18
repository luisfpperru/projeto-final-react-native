import React from 'react';
import AppRoutes from './app-routes';
import AuthRoutes from './auth-routes';
import Loading from '../screens/Loading';
import {useAuth} from '../contexts/auth';

export default function Routes(){
  
  const { usuarioLogado, loading } = useAuth();
  if (loading) {
    return <Loading/>;
  }
  {//return (<AppRoutes />);
  }
  return (usuarioLogado ? <AppRoutes /> : <AuthRoutes/>);
};
