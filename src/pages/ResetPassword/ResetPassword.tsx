import Styles from './ResetPassword.module.css';
import { useReducer, ChangeEvent, FocusEvent, FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
// @ts-ignore
import { NotificationContainer, NotificationManager } from 'react-notifications';



interface IState {
    password: string;
    reEnterPassword: string;
    passwordError: string;
    confirmPasswordError: string;
    focusedPassword: boolean;
    focusedConPassword: boolean;
}

interface IAction {
    type: string;
    payload: string;
}


const initState: IState = {
    password: '',
    reEnterPassword: '',
    passwordError: '',
    confirmPasswordError: '',
    focusedPassword: false,
    focusedConPassword: false
}

const resetPasswordReducer = (state: IState, action: IAction) => {
    switch(action.type){
        case 'CHANGE PASSWORD':
            return { ...state, password: action.payload }
        case 'CHANGE RE-ENTER PASSWORD':
            return { ...state, reEnterPassword: action.payload }
        case 'FOCUS PASSWORD':
            return { ...state, focusedPassword: true, passwordError: action.payload }
        case 'BLUR PASSWORD':
            return { ...state, focusedPassword: false, passwordError: action.payload }
        case 'FOCUS CONFIRM PASSWORD':
            return { ...state, focusedConPassword: true, confirmPasswordError: action.payload }
        case 'BLUR CONFIRM PASSWORD':
            return { ...state, focusedConPassword: false, confirmPasswordError: action.payload }
        default:
            return state;
    }
}




const ResetPassword = () => {

    const PassError = "Password must be at least 8 characters, include uppercase, lowercase, digit and special character!";
    const confirmPassError = "Password Mismatch";
    const PasswordRegex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";


    const [state, dispatch] = useReducer(resetPasswordReducer, initState);
    const { userId, token } = useParams();
    const navigate = useNavigate();

    // DESTRUCTURE ALL STATE VALUES

     const { password, 
        reEnterPassword, 
        passwordError, 
        confirmPasswordError,
        focusedPassword,
        focusedConPassword
    } = state;


    // HANDLE INPUT CHANGES

    const handleOldPass = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'CHANGE PASSWORD',
            payload: e.target.value
        })
    }

    const handleNewPass = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'CHANGE RE-ENTER PASSWORD',
            payload: e.target.value
        })
    }

    // HANDLE ERRORS
    const focusPasswordHandler = (e: FocusEvent<HTMLInputElement>) => {
        dispatch({
            type: 'FOCUS PASSWORD',
            payload: PassError
        })
    }

    const blurPasswordHandler = (e: FocusEvent<HTMLInputElement>) => {
        dispatch({
            type: 'FOCUS PASSWORD',
            payload: ''
        })
    }

    const focusConPasswordHandler = (e: FocusEvent<HTMLInputElement>) => {
        dispatch({
            type: 'FOCUS CONFIRM PASSWORD',
            payload: confirmPassError
        })
    }

    const blurConPasswordHandler = (e: FocusEvent<HTMLInputElement>) => {
        dispatch({
            type: 'BLUR CONFIRM PASSWORD',
            payload: ''
        })
    }


    // FORM SUBMIT HANDLER

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        const url = 'http://localhost:4000/reset-password';
        const successMsg = 'Password reset was succesful!';
        const redirectMsg = '...Redirecting to login page...'
        const errorMsg = 'Error occured...Pls try again later!';

        const data = {
            password,
            reEnterPassword
        }   

        try {
            const response = await axios.post(`${url}/${userId}/${token}`, data);

            NotificationManager.success(successMsg);
            NotificationManager.success(redirectMsg);

            // AUTOMATICALLY REDIRECTS TO LOGIN PAGE AFTER 5 seconds

            setTimeout(() => {
                navigate('/admin')
            }, 5000)

        } catch (error) {
            NotificationManager.error(errorMsg);
        }

    }

    return (
            <div className={Styles.container}>

                <div className={Styles.error}>
                    <NotificationContainer />
                </div>

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
                                autoComplete="off"
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
                                autoComplete="off"
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