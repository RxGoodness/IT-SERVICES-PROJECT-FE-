import React, { useReducer, ChangeEvent, FocusEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// @ts-ignore
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Styles from './ForgetPassword.module.css';


interface IState {
  email: string;
  focused: boolean;
  errorMessage: string
}

interface IAction {
  type: string;
  payload: string
}

const initState: IState = {
  email: '',
  focused: false,
  errorMessage: ''
}


const forgetPasswordReducer = (state: IState, action: IAction) => {
  switch(action.type){
      case 'CHANGE EMAIL':
        return {...state, email: action.payload}
      case 'FOCUS HANDLER':
        return {...state, focused: true, errorMessage: action.payload}
      case 'BLUR HANDLER':
        return {...state, focused: false, errorMessage: action.payload}
      default:
        return state;
  }
}


const Content = () => {

    const [state, dispatch] = useReducer(forgetPasswordReducer, initState);

    // DESTRUCTURE ALL STATE VALUES
    const { email, focused, errorMessage } = state;

    // HANDLE INPUT CHANGES
    const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: 'CHANGE EMAIL',
        payload: e.target.value
      })
    }

    // HANDLE ERRORS
    const focusHandler = (e: FocusEvent<HTMLInputElement>) => {
      dispatch({
        type: 'FOCUS HANDLER',
        payload: 'Email is not valid'
      })
    }

    const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
      dispatch({
        type: 'BLUR HANDLER',
        payload: ''
      })
    }

    // HANDLE FORM SUBMIT

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault(); 

        const url = 'http://localhost:4000/reset-password/enter-email';
        const successMsg = `Password reset link sent to ${email}. Link will be valid for 15 minute!`;
        const errorMsg1 = 'Email is required!';
        const errorMsg2 = 'Something went wrong!';
        const body = { email };

        try {

          !body.email && NotificationManager.error(errorMsg1);
          const result = await axios.post(url, body);
          NotificationManager.success(successMsg);

        } catch(error: any) {

          error.message ? 
          NotificationManager.error(error.response.data.msg) : 
          NotificationManager.error(errorMsg2);

        }

      }



    return (

        <div className={Styles.content}>
  
              <div className={Styles.error}>
                    <NotificationContainer />
              </div>

              <form className={Styles.form} onSubmit={handleSubmit}>

                  <div className={Styles.forget_password_field}>
                    <p>Forget Password</p>
                  </div>
                
                  <div className={Styles.input_field}>
                    <p className={Styles.email_text}>
                      <label htmlFor='email'>Email Address</label>
                    </p>
                    <input 
                      className={Styles.email_input} 
                      type="email" 
                      id="email" 
                      value={email}
                      onChange={changeEmail}
                      onFocus={focusHandler}
                      onBlur={blurHandler}
                      autoComplete="off"
                      placeholder="Enter Email Address"
                      required
                    />
                    <p className={Styles.back_to_login}><Link to="/admin">Back To Login</Link></p>
                    {focused && (<span className={Styles.emailError}>{errorMessage}</span>)}
                  </div>
                  <button 
                    className={Styles.submit_button_field} 
                    type="submit">
                      <span className={Styles.send_text}>Send</span>
                  </button>
              </form>
      </div>
    ) 

}


export default Content;