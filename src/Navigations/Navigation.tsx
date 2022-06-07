import { Routes, Route, BrowserRouter } from "react-router-dom";
import Admin from "./Admin";
import Clients from "./Clients";
import AdminLogin from "../pages/AdminLogin/AdminLogin"
import Pagespage from "../pages/Pagespage/Pages-page";


const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/*" element={<Clients />} />
          <Route path="/admin*" element={<Admin />} />
          

      </Routes>
    </BrowserRouter>
    
  )
}

export default Navigation