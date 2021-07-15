import React from 'react';
import AppRoutes from './app-routes';
import AuthRoutes from './auth-routes';
import Loading from '../screens/Loading';

const Routes = () => {
  return <AppRoutes/>;
  {//return signed ? <AppRoutes /> : <AuthRoutes/>;
  }
};

export default Routes;