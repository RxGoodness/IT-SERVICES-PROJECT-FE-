import './App.css';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import About from './pages/AboutUs/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
        <Routes>
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password/:userId/:token" element={<ResetPassword />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </Router>
  );
}

export default App;
