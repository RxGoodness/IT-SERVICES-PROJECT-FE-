import React from 'react';
import styles from './AdminStyle.module.css'
import { AiOutlineSetting} from "react-icons/ai";
import {VscBellDot} from "react-icons/vsc";
import {GrProductHunt} from "react-icons/gr"



const Adminheader = () => {
    return (
        
        <div className={styles.headWrapper}>
            <div className={styles.logo}>
                <img src="https://decagonhq.com/wp-content/uploads/2021/12/logo-white.svg" alt="logo"/>
                
            </div>
            <div className={styles.iconWrapper}>
                <ul className = {styles.childWrapper}>
                    <li>
                        <VscBellDot className={styles.iconChildren}/>
                    </li>
                    <li>
                     <AiOutlineSetting className = {styles.iconChildren}/>
                    </li>
                    <li>
                     <GrProductHunt className = {styles.iconChildren}/>
                    </li>
                </ul>
               
            </div>
        </div>


        
    )
}

export default Adminheader