import React from "react";
import styles from "./AdminSidebar.module.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className = {styles.sideBar_container}>
    <div className={styles.sidebar}>
      <div className={styles.topbar}>
        <ul>
            <li>
            <Link to="/admin/dashboard"  className={styles.link}>Overview</Link>
            </li>
            <li><Link to="/admin/dashboard/pages" className={styles.link}> Pages</Link></li>
            <li> 
                <Link to="/admin/dashboard/blog" className={styles.link}>
                Blog
                </Link>
            </li>
            <li>
                <Link to="/admin/dashboard/Faqs" className={styles.link}>
                FAQs
                </Link>
            </li>
            <li>
               <Link to="/admin/dashboard/accountsettings" className={styles.link}>
                Account Settings
               </Link>
            </li>
        </ul>
        
      </div>
      <div className={styles.bottombar}>

        <div> <Link to="/admin/dashboard/preview" className={styles.link}>Preview Site</Link></div>
        <div><Link to="/admin/dashboard/logout" className={styles.link}>Log out</Link></div>
       
      </div>
      
    </div>
    </aside>
  );
};

export default Sidebar;
