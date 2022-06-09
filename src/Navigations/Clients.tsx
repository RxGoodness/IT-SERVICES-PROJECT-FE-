import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import AboutUs from '../pages/AboutUs/AboutUs'
import Articles from '../pages/Articles/Articles'
import ArticlesDetails from '../pages/ArticlesDetails/ArticlesDetails'
import Blog from '../pages/Blog/Blog'
import BlogDetails from '../pages/BlogDetails/BlogDetails'
import ContactUs from '../pages/ContactUs/ContactUs'
import Faq from '../pages/Faq/Faq'
import JobApplication from '../pages/JobApplication/JobApplication'
import Jobs from '../pages/Jobs/Jobs'
import JobsDetails from '../pages/JobsDetails.tsx/JobsDetails'
import JoinUs from '../pages/JoinUs/JoinUs'
import LandingPage from '../pages/LandingPage/LandingPage'
import Partner from '../pages/Partner/Partner'
import ProjectDetails from '../pages/ProjectDetails/ProjectDetails'
import Projects from '../pages/Projects/Projects'
import Services from '../pages/Services/Services'
import Footer from '../components/footer/Footer'
import ResetPassword from '../pages/ResetPassword/ResetPassword'
import { useLocation } from "react-router-dom";



const Clients = () => {

  // const currentURL = window.location.pathname
  const sampleLocation = useLocation();

  return (
    <div>
      {!sampleLocation.pathname.includes("/reset-password/") && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job/:id" element={<JobsDetails />} />
        <Route path="/jobApplication" element={<JobApplication />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projectDetails/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogDetails/:id" element={<BlogDetails />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articlesDetails/:id" element={<ArticlesDetails />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/partner" element={<JoinUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reset-password/:userId/:token" element={<ResetPassword />} />
       
      </Routes>
      {!sampleLocation.pathname.includes("/reset-password/") && <Footer />}
    </div>
    
  )
}

export default Clients