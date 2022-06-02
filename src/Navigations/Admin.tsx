import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import ForgetPassword from '../pages/ForgetPassword/ForgetPassword'
import ResetPassword from '../pages/ResetPassword/ResetPassword'

const Admin = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard*" element={<Dashboard />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/reset-password/:userId/:token" element={<ResetPassword />} />
      
    </Routes>
  )
}

export default Admin