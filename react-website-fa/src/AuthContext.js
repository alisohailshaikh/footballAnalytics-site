import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  isLoading: false,
  login: () => {},
  logout: () => {},
  checkAuth: () => {},
});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  
  const login = async (data) => {
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:5000/users',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
  
    try {
      const response = await axios.request(config);
      const token = response.data; // Assuming your API response has a "token" property
      console.log(token)
      localStorage.setItem("token", token);
      setToken(token);
      setIsAuthenticated(true);
      return token; // Return the token for potential handling in calling components
    } catch (error) {
      console.error(error);
      throw error; // Re-throw the error for handling in calling components
    }
  };
  

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("token")
  };

  const checkAuth = () => {
  };

  const value = { token, isAuthenticated, isLoading, login, logout, checkAuth };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
