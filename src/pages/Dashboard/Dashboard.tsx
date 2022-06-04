import React from 'react'
import Sidebar from '../../components/admin_sidebar/AdminSidebar'
import Adminheader from '../../components/admin_header/AdminHeader'
import styles from './Dashboard.module.css'
import { Routes, Route } from "react-router-dom";
import Blog from '../Blog/Blog'
import Faq from '../Faq/Faq'
import Pages from '../AdminPages/Pages'
import Overview from '../Overview/Overview';
import AdminFaq from '../AdminFaq/AdminFaq';
import Pagespage from '../Pagespage/Pages-page';


const Dashboard = () => {
  return (
    <div>
      <Adminheader />
      <div className={styles.dashboard_container}>
        <div className={styles.content}>
          <Sidebar />
        </div>
        <div>
        <Routes>
          <Route   path="/" element={<Overview />}/>
          <Route path="/pages" element={<Pagespage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faqs" element={<AdminFaq />}/>
          <Route path="/accountsettings" element={<Faq />}/>
        {/* <Route  exact path="/" element={<Blog />}> */}
          {/* { <Route index element={<Overview />} /> } */}
          
          {/* <Route path="/admin/accountsettings" element={<AccountSettings />} /> */}
          {/* <Route path="/admin/preview" element={<Preview />} /> */}
        {/* /</Route> */}
      </Routes>
        </div>
      </div>

    </div>
  )
}

export default Dashboard