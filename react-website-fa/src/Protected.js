import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { token, isAuthenticated, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Loading...</div>; // Display loading indicator while checking
  }

  

  

  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
 
};

export default ProtectedRoute;
