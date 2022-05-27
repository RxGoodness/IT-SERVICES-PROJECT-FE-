import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

const Admin = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard*" element={<Dashboard />} />
      
    </Routes>
  )
}

export default Admin