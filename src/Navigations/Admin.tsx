import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminFaq from '../pages/AdminFaq/AdminFaq'
import Adminlogin from '../pages/AdminLogin/AdminLogin'
import Dashboard from '../pages/Dashboard/Dashboard'
import Login from '../pages/Login/Login'
import Overview from '../pages/Overview/Overview'
import Register from '../pages/Register/Register'
const Admin = () => {
  return (
    <Routes>
      <Route path="/" element={<Adminlogin  email={""} password={""}/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/adminFaq" element={<AdminFaq />} />
      <Route path="/dashboard*" element={<Dashboard />} />
    </Routes>
  )
}

export default Admin