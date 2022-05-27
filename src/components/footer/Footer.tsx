import React from 'react'
import style from './Footer.module.css'
import faIcon from '../../assets/images/footer/fb.png'
import twIcon from '../../assets/images/footer/twitter.png'
import insta from '../../assets/images/footer/instagram.png'

function Footer() {
  return (
    <>
    <footer className={style.background}>
          <div className={style.icons}>
            <img src={faIcon} alt="" />
            <img src={twIcon} alt="" />
            <img src={insta} alt="" />
          </div>

          <div className={style.content}>
                <div className={style.textContent}>
                      <h3>Services</h3>
                      <p>Web Development</p>
                      <p>Mobile App Development</p>
                      <p>Product Design (UI/UX)</p>
                      <p>Agile Project Management</p>
                      <p>Branding Services</p>
                      <p>Software Development</p>
                      <p>Product Testing</p>
                      <p>Data Analysis & Research</p>
                      <p>Telecommunication & VAS</p>
                      <p>Digital Marketing</p>
                      <p>IT Outsourcing & Support</p>
                      <p>Training</p>
                      <p>Blockchain Development</p>

                </div>
                <div className={style.textContent}>
                  <div>
                  <h3>SaaS Solutions</h3>
                      <p>Custom Portal</p>
                      <p>School Management System</p>
                      <p>ERP System</p>
                      <p>Web Hosting Portal</p>
                      <p>Bulk SMS Portal</p>
                      <p>Online Dating System</p>   
                  </div>

                  <div>
                  <h3>Products</h3>
                      <p>Laundry App</p>
                      <p>Logistic App</p>     
                  </div>

                </div>
                <div className={style.textContent}>
                  <div>
                  <h3>For Business</h3>
                      <p>Product for Business</p>
                      <p>Product for Business</p> 
                      <p>Product for Business</p>
                      <p>Product for Business</p>  
                      <p>Product for Business</p>
                      <p>Product for Business</p> 
                  </div>
      
                  <div>
                      <h3>For Startup</h3>
                      <p>Service for Startup</p>
                      <p>Service for Startup</p>     
                  </div>

                </div>
                <div className={style.textContent}>
                <div>
                  <h3>For Institutions</h3>
                      <p>Product for Healthcare</p>
                      <p>Product for Education</p> 
                      <p>Prodcut for Media</p>
                      <p>Product for Sports</p>  
                      <p>Product for Finance</p>
                      <p>Product for </p> 
                  </div>

                </div>
                <div className={style.textContent}>
                <div>
                  <h3>Company</h3>
                      <p>About us</p>
                      <p>Careers</p> 
                      <p>Case Study</p>
                      <p>Contact us</p>  
                      <p>Partners</p>
                      <p>Blog</p> 
                  </div>

                  <div>
                  <h3>Site Map</h3>
                      <p>Company</p>
                      <p>Home</p> 
                      <p>Services</p>
                      <p>Packages</p>  
                      <p>Contact</p>
                  </div>

                </div>


          </div>

          <div className={style.about}>
            <p>© APPOGA TECHNOLOGIES LTD. All rights reserved. 2021. Scrapabill Ltd is the joint venture partner and exclusive corporate sponsor of Appoga Technologies Limited and its brands. Contact Scrapabill for any legal issures related to the services. Site designed and managed by appoga.com</p>
          </div>



    </footer>
    </>
  )
}

export default Footer