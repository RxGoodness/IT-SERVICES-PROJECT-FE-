import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminFaq from '../pages/AdminFaq/AdminFaq'
import Adminlogin from '../pages/AdminLogin/AdminLogin'
import Dashboard from '../pages/Dashboard/Dashboard'
import Login from '../pages/Login/Login'
import Overview from '../pages/Overview/Overview'
import Register from '../pages/Register/Register'
import ForgetPassword from '../pages/ForgetPassword/ForgetPassword'
import AdminOverview from "../pages/AdminOverview/AdminOverview";
import Blog from "../pages/Blog/Blog";
import Faq from "../pages/Faq/Faq";
import Pages from "../pages/AdminPages/Pages";
import { CaseStudy } from "../pages/caseStudy/CaseStudy";
import { CreateBlog } from "../pages/createBlog/CreateBlog";

const Admin = () => {
  return (
    <Routes>
      <Route path="/" element={<Adminlogin  email={""} password={""}/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard*" element={<Dashboard />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/adminFaq" element={<AdminFaq />} />
      <Route path="/dashboard*" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />}> 
      
      <Route index element={<Overview />} />
            <Route path="pages" element={<Pages />} />
            <Route path="blog" element={<Blog />} />
            <Route path="faqs" element={<Faq />} />
            <Route path="accountsettings" element={<Faq />} />
            <Route path="casestudy" element={<CaseStudy />} />
            <Route path="createblog" element={<CreateBlog />} />
      
      
      
      </Route>
      
    </Routes>
  )
}

export default Admin