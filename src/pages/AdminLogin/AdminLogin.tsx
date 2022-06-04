import React, { useState } from "react";
import { ChangeEvent, FormEvent} from "react";
import axios from "axios"
import LoginNav from "../../components/LoginNavBar/LoginNav";
import adminCss from "./adminlogin.module.css";

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
   <div className={adminCss.overallContainer}>
     <div>
      <LoginNav />
     </div>
    
    <div className={adminCss.formDesign}>
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" className={adminCss.inputLabel}>
        Email
      </label>
      <input
        value={credentials.email}
        name="email"
        className={adminCss.inputField}
        onChange={handleChange}
      />
      <div className={adminCss.meta}/>

      <label htmlFor="password" className={adminCss.inputLabel}>Password</label>
      <input type="password" value={credentials.password} name="password" className={adminCss.inputField} onChange={handleChange} />

      <div className={adminCss.meta}/>

      <div className={adminCss.inputRem}>

      {/* <input type="checkbox" value="rmb" className="chk" id="rem" onClick= {handleSubmit} /> */}
      <label className={adminCss.inputLabelCheck} htmlFor="rmb"> Remember me</label>

      <p className={adminCss.lowerChecks}> Forgot password?</p>
      </div>

      <button className={adminCss.btn}>Log In</button>
    </form>
    </div>

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
