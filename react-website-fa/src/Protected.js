import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { token, isAuthenticated, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Loading...</div>; // Display loading indicator while checking
  }

  console.log(isAuthenticated)
  console.log(token)

  return (
    isAuthenticated && token ? (
      <Outlet/> // Render child component if authenticated
    ) : (
      <Navigate to="/" replace /> // Redirect to login if not authenticated
    )
  );
};

export default ProtectedRoute;
