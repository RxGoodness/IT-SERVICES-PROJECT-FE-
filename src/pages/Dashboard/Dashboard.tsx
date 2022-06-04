import React from "react";
import Sidebar from "../../components/admin_sidebar/AdminSidebar";
import Adminheader from "../../components/admin_header/AdminHeader";
import styles from "./Dashboard.module.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Overview from "../AdminOverview/AdminOverview";
import Blog from "../Blog/Blog";
import Faq from "../Faq/Faq";
// import Pages from "../AdminPages/Pages";
// import { CaseStudy } from "../caseStudy/CaseStudy";
// import { CreateBlog } from "../createBlog/CreateBlog";

const Dashboard = () => {
  return (
    <div > 
      <Adminheader />
      <div className={styles.dashboard_container}>
        <div className={styles.content}>
          <Sidebar />
        </div>
        <div>
        <Routes>
          <Route  path="/" element={<Overview />}/>
          {/* <Route path="/pages" element={<Pagespage />} /> */}
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/faqs" element={<AdminFaq />}/> */}
          <Route path="/accountsettings" element={<Faq />}/>
        {/* <Route  exact path="/" element={<Blog />}> */}
          {/* { <Route index element={<Overview />} /> } */}
          
          {/* <Route path="/admin/accountsettings" element={<AccountSettings />} /> */}
          {/* <Route path="/admin/preview" element={<Preview />} /> */}
        {/* /</Route> */}
      </Routes>
        <div className = {styles.content_container}>
          {/* <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faqs" element={<Faq />} />
            <Route path="/accountsettings" element={<Faq />} />
            <Route path="/casestudy" element={<CaseStudy />} />
            <Route path="/createblog" element={<CreateBlog />} />

        
          </Routes> */}
          <Outlet/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
