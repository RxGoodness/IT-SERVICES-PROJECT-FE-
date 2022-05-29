import "react-notifications/lib/notifications.css";
import Styles from './ForgetPassword.module.css';
import Aside from "./Aside";
import Content from "./Content";

function ForgetPassword() {

    return (
        <div className={Styles.mainContent}>
            <Aside />
            <Content />
        </div>
    )
    
}


export default ForgetPassword;