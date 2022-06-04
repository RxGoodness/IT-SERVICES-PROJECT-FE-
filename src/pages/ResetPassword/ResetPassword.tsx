import Styles from './ResetPassword.module.css';
import { ChangeEvent, FocusEvent, SyntheticEvent, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';



const PassError = "Password must be at least 8 character, include uppercase, lowercase, digit and special character!";
const confirmPassError = "Password mismatch!";
const PasswordRegex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";


const ResetPassword = () => {
     
    const { userId, token } = useParams();
    const [password, setPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');
    const [passwordError, setPasswordError] = useState(PassError);
    const [confirmPasswordError, setConfirmPassError] = useState(confirmPassError);
    const [redirect, setRedirect] = useState(false);
    const [focusedPassword, setFocusedPassword] = useState(false);
    const [focusedConPassword, setFocusedConPassword] = useState(false);
    const navigate = useNavigate();
  
    const focusPasswordHandler = (e: FocusEvent<HTMLInputElement>) => {
        setFocusedPassword(true)
    }
    const blurPasswordHandler = (e: FocusEvent<HTMLInputElement>) => {
        setFocusedPassword(false)
    }

    const focusConPasswordHandler = (e: FocusEvent<HTMLInputElement>) => {
        setFocusedConPassword(true)
    }
    const blurConPasswordHandler = (e: FocusEvent<HTMLInputElement>) => {
        setFocusedConPassword(false)
    }


    const handleOldPass = (e: ChangeEvent<HTMLInputElement>) => {
        const oldpass = e.target.value;
        setPassword(oldpass);
    }


    const handleNewPass = (e: ChangeEvent<HTMLInputElement>) => {
        const newpass = e.target.value;
        setReEnterPassword(newpass);
    }


    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();


        const baseUrl = 'http://localhost:4000/reset-password';

        const data = {
            password,
            reEnterPassword
        }   
      
        axios.post(`${baseUrl}/${userId}/${token}`, data)
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })

        setRedirect(true);

    }

    if (redirect) {
        navigate('/login')
    }

    
    return (
            <div className={Styles.container}>

                <div className={Styles.aside}>
                    <p className={Styles.appogaLogo}></p>
                </div>

                <div className={Styles.section}>

                    <form className={Styles.form} onSubmit={handleSubmit}>
                        <div className={Styles.resetPasswordHeader}>
                            <p>Reset Password</p>
                        </div>
    
                        <div className={Styles.password}>
                            <p>
                                <label htmlFor="password">Enter New Password</label>
                            </p>
                            <input 
                                type="password" 
                                id="password" 
                                name="password"
                                onChange={handleOldPass}
                                value={password}
                                placeholder="New Password"
                                required
                                pattern={PasswordRegex}
                                onBlur={blurPasswordHandler}
                                onFocus={focusPasswordHandler}
                                className={Styles.input_1}
                            />
                             {focusedPassword && (<span className={Styles.passError}>{passwordError}</span>)}
                        </div>
    
                        <div className={Styles.confirmPassword}>
                            <p>
                                <label htmlFor="reEnterPassword">Confirm New Password</label>
                            </p>
                            <input
                                type="password" 
                                id="reEnterPassword" 
                                onChange={handleNewPass}
                                value={reEnterPassword}
                                placeholder="Confirm New Password"
                                pattern={password}
                                required
                                onBlur={blurConPasswordHandler}
                                onFocus={focusConPasswordHandler}
                                className={Styles.input_2}
                            />
                            {focusedConPassword && (<span className={Styles.comPassError}>{confirmPasswordError}</span>)}
                        </div>
                        <button className={Styles.submitBox} type="submit"><span className={Styles.sendBox}>Send</span></button>
                    </form>

                </div>
         </div>
    )
} 



export default ResetPassword;