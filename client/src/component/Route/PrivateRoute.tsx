import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
 
const PrivateRoute = ({isAuth}:any) => {
    const auth =isAuth.isAuth;
      return auth ? <Outlet /> : <Navigate to="/" />;
}


export default PrivateRoute;