<<<<<<< HEAD
import React, {useState} from 'react';
import './App.css';
import Adminlogin from './pages/AdminLogin/AdminLogin';
import Pagespage from './pages/Pagespage/Pages-page';
import Navigation from './Navigations/Navigation';
=======
import './App.css';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import ResetPassword from './components/ResetPassword/ResetPassword';
import About from './components/AboutUs/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

>>>>>>> forget-password

function App() {

  return (
<<<<<<< HEAD
    <>
    <Navigation />
    </>
  
=======
    <Router>
        <Routes>
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password/:userId/:token" element={<ResetPassword />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </Router>
>>>>>>> forget-password
  );
}

export default App;
