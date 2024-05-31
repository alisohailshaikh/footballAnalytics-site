import './App.css';
import Login from './Login/Login';
import UploadVideo from './UploadPage/UploadVideo';
import {Route,Routes } from 'react-router-dom';
import FirstPagee from './FirstPage/FirstPagee';
import HomePage from './HomePage/HomePage';
import Search from './SearchBar/Search';
import Register from './Register/Register';
import Dashboard from './Dashboard/Dashboard';
import Divider from './Divider/Divider';
import Carousel from './SearchBar/Carousel';
import ProtectedRoute from './Protected';
import { AuthProvider } from './AuthContext';
import Inference from './UploadPage/Inference';
import UploadEventVideo from './EventDetection/UploadEventVideo';
import Event from './EventDetection/Event';
import MatchDashboard from './UploadPage/MatchDashboard';
import About from './About/About';



export default function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Routes> 
        <Route default exact path="/" element={<Login/>} />
        <Route default exact path="/about" element={<About/>} />
        <Route path="/matchdashboard" element={<ProtectedRoute><MatchDashboard/></ProtectedRoute>} />
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
            path="/detect/:uploadId"
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
            path="/event/:uploadId"
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
