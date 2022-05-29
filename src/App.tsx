import React, {useState} from 'react';
import './App.css';
import Adminlogin from './pages/AdminLogin/AdminLogin';
import Pagespage from './pages/Pagespage/Pages-page';

function App() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    messageText: "",
    alert: false,
    styleType: "",
  });
  return (
    <>
    {/* <Adminlogin email={''} password={''}  /> */}
    <Pagespage />
    </>
   

  );
}

export default App;
