import './App.css';
import Login from './Login/Login';
import FirstPage from './FirstPage/FirstPage';
import UploadVideo from './UploadPage/UploadVideo';
import {Route,Routes } from 'react-router-dom';
import FirstPagee from './FirstPage/FirstPagee';
import EnterNames from './EnterNames/EnterName';
import SearchBar from './SearchBar/SearchBar';
import HomePage from './HomePage/HomePage';
import Search from './SearchBar/Search';
import ResponsiveAppBar from './NavBar/NavBarNew';
import Register from './Register/Register';
import Dashboard from './Dashboard/Dashboard';
import Divider from './Divider/Divider';
import Carousel from './SearchBar/Carousel';
import ProtectedRoute from './Protected';
import { AuthProvider } from './AuthContext';
import Inference from './UploadPage/Inference';
import UploadEventVideo from './EventDetection/UploadEventVideo';
import Event from './EventDetection/Event';



export default function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Routes> 
        <Route default exact path="/" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage/> 
              </ProtectedRoute>
            }
        />
        <Route
            path="/search"
            element={
              <ProtectedRoute>
                <Search/> 
              </ProtectedRoute>
            }
        />
        <Route
            path="/analysis"
            element={
              <ProtectedRoute>
                <FirstPagee/> 
              </ProtectedRoute>
            }
        />
        <Route
            path="/upload"
            element={
              <ProtectedRoute>
                <UploadVideo/> 
              </ProtectedRoute>
            }
        />
        <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard/> 
              </ProtectedRoute>
            }
        />
        <Route
            path="/divider"
            element={
              <ProtectedRoute>
                <Divider/> 
              </ProtectedRoute>
            }
        />
        <Route
            path="/carousel"
            element={
              <ProtectedRoute>
                <Carousel/> 
              </ProtectedRoute>
            }
        />
        <Route
            path="/inference"
            element={
              <ProtectedRoute>
                <Inference/> 
              </ProtectedRoute>
            }
        />
        <Route
            path="/uploadevent"
            element={
              <ProtectedRoute>
                <UploadEventVideo/> 
              </ProtectedRoute>
            }
        />
        <Route
            path="/event"
            element={
              <ProtectedRoute>
                <Event/> 
              </ProtectedRoute>
            }
        />
      </Routes>
      </AuthProvider>
    </div>
  );
}
