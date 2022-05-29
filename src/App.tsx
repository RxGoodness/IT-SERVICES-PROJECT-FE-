import './App.css';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import ResetPassword from './components/ResetPassword/ResetPassword';
import About from './components/AboutUs/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
        <Routes>
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password/" element={<ResetPassword />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </Router>
      // <Route path="/reset-password/:userId/:token" element={<ResetPassword />} />
  );
}

export default App;
