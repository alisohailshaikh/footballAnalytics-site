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
        {/* <Route default exact path="/" element={<Login/>} />
        <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage/> 
              </ProtectedRoute>
            } */}
          {/* /> */}
        <Route path= "/home" element={<HomePage/>}/>
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/home" element={<HomePage/>} />
        <Route exact path="/search" element={<Search/>} />
        <Route exact path="/analysis" element={<FirstPagee/>} />
        <Route exact path="/about" element={<SearchBar/>} />
        <Route path='/upload' element={<UploadVideo/>}/>
        <Route path='/names' element={<EnterNames/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/divider' element={<Divider/>}/>
        <Route path='/carousel' element={<Carousel/>}/>
        <Route path='/inference' element={<Inference/>}/>
        <Route path='/uploadevent' element={<UploadEventVideo/>}/>
        <Route path='/event' element={<Event/>}/>

      </Routes>
      </AuthProvider>
    </div>
  );
}
