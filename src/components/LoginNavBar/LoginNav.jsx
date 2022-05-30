import React from 'react'
import logo from '../../assets/image/appoga-logo-w.png'
import "./loginnav.css"

function LoginNav() {
  return (
    <div className='navbar'>
         <div >
             <img className='img' src={logo} />
         </div>
    </div>
  )
}

export default LoginNav