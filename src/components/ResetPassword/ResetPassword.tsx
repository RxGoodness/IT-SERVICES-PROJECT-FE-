import React, { SyntheticEvent, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// @ts-ignore
import { NotificationContainer, NotificationManager } from 'react-notifications';
import axios from 'axios';


function ResetPassword() {

    const navigate = useNavigate();
    const { userId, token } = useParams();
    const [password, setPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');
    const [redirect, setRedirect] = useState(false);


    const handleOldPass = (e: React.ChangeEvent<HTMLInputElement>) => {
        const oldpass = e.target.value;
        setPassword(oldpass);
    }

    const handleNewPass = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newpass = e.target.value;
        setReEnterPassword(newpass);
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        if (password !== reEnterPassword) {
            throw Error('Password Mismatch')
        }

        const baseUrl = 'http://localhost:4000/reset-password';

        const data = {
            password,
            reEnterPassword
        }   

        axios.post(`${baseUrl}/${userId}/${token}`, data)
        .then((res) => {
            NotificationManager.success('Password Reset link sent to your email successful!')
        })
        .catch((err) => {
            if (err.response) {
                NotificationManager.error(err.response.data.msg);
              } else {
                NotificationManager.error("Something Went Wrong");
              }
        })

        setRedirect(true);

    }

    if (redirect) {
        navigate('/home')
    }

 
    return (
            <div className="content">

                <div className="error">
                    <NotificationContainer />
                </div>

                 <form onSubmit={handleSubmit}>

                     <div>
                         <p>Reset Password</p>
                     </div>
   
                     <div>
                       <p>
                           <label htmlFor='password'>Enter New Password</label>
                       </p>
                       <input 
                           type="password" 
                           id='password' 
                           onChange={handleOldPass}
                           value={password}
                       />
                     </div>
   
                     <div>
                       <p>
                         <label htmlFor='reEnterPassword'>Confirm New Password</label>
                       </p>
                       <input
                       type="password" 
                       id='reEnterPassword' 
                       onChange={handleNewPass}
                       value={reEnterPassword}
                       />
                     </div>
   
                     <button className="submit_button_field" type="submit"><span className="send_text">Send</span></button>
   
                 </form>
         </div>
    )
} 



export default ResetPassword;