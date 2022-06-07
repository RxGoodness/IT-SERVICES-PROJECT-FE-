import React, { useState, useContext, useEffect } from "react";
import { ChangeEvent, FormEvent } from "react";
import jwtDecode from "jwt-decode";
import { AuthContext } from "../../context/AdminContext";
import axios from "axios";
import LoginNav from "../../components/LoginNavBar/LoginNav";
import adminCss from "./adminlogin.module.css";

interface Login {
  email: string;
  password: string;
}

const Adminlogin = (props: Login) => {
  const { dispatch } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:1000/admin/login", {
        email: credentials.email,
        password: credentials.password,
      });

      // if(response.)

      const token = response.data.token;
      const userObj = jwtDecode(token);
      console.log("newUserToken: ", userObj);

      dispatch({ type: "GET_TOKEN", payload: userObj });
    } catch (error: any) {
      if (error) {
        console.log(error.response.data.msg);
        setError(error.response.data.msg);
      }
    }
  };

  useEffect(() => {
    setError("");
  }, [credentials.email, credentials.password]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(credentials);
    login();
  };

  const url = "localhost:1000/admin/login";

  // axios
  //   .post("http://localhost:1000/admin/login", {
  //     email: credentials.email,
  //     password: credentials.password,
  //   })
  //   .then((response) => console.log(response.data))
  //   .catch((err) => console.log(err));

  return (
    <div className={adminCss.overallContainer}>
      <div>
        <LoginNav />
      </div>

      <div className={adminCss.formDesign}>
        <form className={adminCss.formStyle} onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <label htmlFor="email" className={adminCss.inputLabel}>
            Email
          </label>
          <input
            value={credentials.email}
            name="email"
            className={adminCss.inputField}
            onChange={handleChange}
          />
          <div className={adminCss.meta} />

          <label htmlFor="password" className={adminCss.inputLabel}>
            Password
          </label>
          <input
            type="password"
            value={credentials.password}
            name="password"
            className={adminCss.inputField}
            onChange={handleChange}
          />

          <div className={adminCss.meta} />

          <div className={adminCss.inputRem}>
            {/* <input type="checkbox" value="rmb" className="chk" id="rem" onClick= {handleSubmit} /> */}
            <label className={adminCss.inputLabelCheck} htmlFor="rmb">
              {" "}
              Remember me
            </label>

            <p className={adminCss.lowerChecks}> Forgot password?</p>
          </div>

          <button type="submit" className={adminCss.btn}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

// const [credentials, setCredentials] = useState({
//   email: "",
//   password: "",
//   messageText: "",
//   alert: false,
//   styleType: "",
// });

export default Adminlogin;
