import React, { useState } from "react";
import { ChangeEvent, FormEvent} from "react";
import axios from "axios"
import Navbar from "../../components/navbar/Navbar";
import "./adminlogin.css";

interface Login {
    email: string;
    password: string;
  }



const Adminlogin = (props: Login) => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        messageText: "",
        alert: false,
        styleType: "",
      });
 
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
      }

      const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          console.log(credentials)
      }

      const url = "http://localhost:5000/admin/login";

      axios.post(url,{
          email: credentials.email,
          password: credentials.password
      }).then(response => console.log(response.data))

 return (
    <div className="form--design">
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" className="input--label">
        Email
      </label>
      <input
        value={credentials.email}
        name="email"
        className="input--field"
        onChange={handleChange}
      />

      <label htmlFor="password" className="input--label">Password</label>
      <input type="password" value={credentials.password} name="password" className="input--field" onChange={handleChange} />

      <div className="input--rem">

      {/* <input type="checkbox" value="rmb" className="chk" id="rem" onClick= {handleSubmit} /> */}
      <label className="input-label-check" htmlFor="rmb"> Remember me</label>

      <p className="lower-checks"> Forgot password?</p>
      </div>

      <button className="btn">Log In</button>
    </form>
    </div>
 )
}

// const [credentials, setCredentials] = useState({
//   email: "",
//   password: "",
//   messageText: "",
//   alert: false,
//   styleType: "",
// });

export default Adminlogin
