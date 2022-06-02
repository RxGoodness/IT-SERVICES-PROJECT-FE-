import Styles from './About.module.css';
import { Images } from './AboutUs.Images';


const AboutUs = () => {
  
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
          <p className={Styles.appogaLogo}></p>
          <ul className={Styles.ul}>
            <li className={Styles.home}>Home</li>
            <li className={Styles.company}>Company</li>
            <li className={Styles.services}>Services</li>
            <li className={Styles.products}>Products</li>
            <li className={Styles.packages}>Packages</li>
            <li className={Styles.resources}>Resources</li>
          </ul>
      </div>
      <section>
        <div className={Styles.about_appoga}>
            <h3>About <span className={Styles.appoga_special}>Appoga</span></h3>
            <p className={Styles.info}>We offer technological services for various industries or market globally</p>
            <div>
                <p className={Styles.pic_a}></p>
                <p className={Styles.pic_b}></p>
                <p className={Styles.pic_c}></p>
                <p className={Styles.pic_d}></p>
                <p className={Styles.pic_e}></p>
            </div>        
        </div>
        <div className={Styles.we_are_appoga}>
            <p className={Styles.para1}>
            <strong>1st Paragraph</strong> Appoga Technologies was established in 2000. 
            In publishing and graphic design, Lorem ipsum is a placeholder text 
            commonly used to demonstrate the visual form of a document or a typeface without relying 
            on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. 
            It is also used to temporarily replace text in a process called greeking, which allows 
            </p>
            <p className={Styles.para2}>
            <strong>2nd Paragraph</strong> designers to consider the form of a webpage or publication, 
            without the meaning of the tfore final copy is available. It is also used to 
            temporarily replace text in a process called greeking, which allows designers 
            to consider the form of a webpage or publication, without the meaning of the temonstrate 
            the visual form of a document or a typef
            </p>
            <h3 className={Styles.we_are}>
            We are Appoga
            </h3>
            <p className={Styles.hands_together}></p>
            <p className={Styles.para3}>
            Our Mission is to... In publishing and graphic design, Lorem ipsum is a placeholder 
            text commonly used to demonstrate the visual form of a document or a typeface without 
            relying on meaningful content. Loremonstrate the visual form of a document or a typeface 
            without relying on meaningful content. Lor
            </p>
            <p className={Styles.para4}>
            Our Vision is to... In publishing and graphic design, Lorem ipsum is a placeholder 
            text commonly used to demonstrate the visual form of a document or a typeface without 
            relying on meaningful content. Loremonstrate the visual form of a document or a typeface 
            without relying on meaningful content. Lor
            </p>
        </div>

        <div className={Styles.our_achievements}>
            <p className={Styles.achievements}>Our Achievements</p>
            <ul className={Styles.stars}>
              <img src={Images.Star_Icon} alt="star" />
              <img src={Images.Star_Icon} alt="star" />
              <img src={Images.Star_Icon} alt="star" />
            </ul>
            <main className={Styles.msg_block}>
              <div className={`${Styles.msg} ${Styles.block_1}`}>
                <p className={Styles.ellipse_1}></p>
                <p className={Styles.line_1}></p>
                <p>
                  Developed Over 100 websites for brands in Africa, North America, 
                  Europe and Asia
                </p>
              </div>
              <div className={`${Styles.msg} ${Styles.block_2}`}>
                <p className={Styles.ellipse_2}></p>
                <p className={Styles.line_2}></p>
                <p>
                  Developed Over 100 websites for brands in Africa, 
                  North America, Europe and Asia
                </p>
              </div>
              <div className={`${Styles.msg} ${Styles.block_3}`}>
                <p className={Styles.ellipse_3}></p>
                <p className={Styles.line_3}></p>
                <p>
                  Agile project management for multinational companies 
                  in Nigeria and Canada
                </p>
              </div>
              <div className={`${Styles.msg} ${Styles.block_4}`}>
                <p className={Styles.ellipse_4}></p>
                <p>
                  Agile project management for multinational companies 
                  in Nigeria and Canada
                </p>
              </div>
              <div className={`${Styles.msg} ${Styles.block_5}`}>
                <p className={Styles.ellipse_5}></p>
                <p>
                  Top 10 Modern Website Builders
                </p>
              </div> 
              <div className={`${Styles.msg} ${Styles.block_6}`}>
                <p className={Styles.ellipse_6}></p>
                <p>
                  Top 10 Modern Website Builders
                </p>
              </div>  
            </main>
        </div>
        
        <div className={Styles.why_join_appoga}>
          <h3>Why Join Appoga</h3>
          <p>Reach out to us if you are have the skills and passion 
            to be part of the growing IT industry
          </p>
          <div className={Styles.bottom}>
            <div className={Styles.left}>What you stand to gain when you join us?</div>
            <div className={Styles.right}>
              <div className={Styles.right_first}>
                <p className={Styles.p_growth}>
                    Personal Growth
                    <img src={Images.Snow_Head} alt="snow man" />
                    <img src={Images.Snow_Body} alt="snow man" />
                    <img src={Images.Snow_Arrow} alt="snow man" />
                </p>
                <p>In publishing and graphic design, 
                  Lorem ipsum is a placeholder text commonly used to demonstrate 
                  the visual form of a document or a typeface 
                  without relying on meaning
                </p>
              </div>
              <div>Career Development</div>
              <div>New Opportunities</div>
              <div>Creating Leaders</div>
            </div>
          </div>
        </div>

        <div className={Styles.core_values}>
          <h3>Our Core Values</h3>
          <p>At Appoga,  In publishing and graphic design, 
            Lorem ipsum is a placeholder text commonly used to 
            demonstrate the visual form of a document or a type
          </p>

          <div className={Styles.animated_icons}>
            <div className={Styles.animated_icon_1}>
              <p>ANIMATED ICON</p>
              <p>Core Value 1</p>
              <p>Core Value 1</p>
            </div>
            <div className={Styles.animated_icon_2}>
              <p>ANIMATED ICON</p>
              <p>Core Value 2</p>
              <p>Core Value 2</p>
            </div>
            <div className={Styles.animated_icon_3}>
              <p>ANIMATED ICON</p>
              <p>Core Value 3</p>
              <p>Core Value 3</p>
            </div>
          </div>
        </div>

        <div className={Styles.free_quote}>
          <div className={Styles.quote_title}>
              <h3>Get a Free Quote</h3>
              <p>Let's begin by providing a free quotation for your project</p>
          </div>
          <form className={Styles.quote_form}>
            <label htmlFor="name" />
            <input type="text" id="name"placeholder="Name" />

            <label htmlFor="email"/>
            <input type="text" id="email" placeholder="Email" />

            <textarea placeholder="Message"/>
            <input type="submit" value="Get a Free Quote" />
          </form>
        </div>

      </section>

      <footer className={Styles.footer}>

          <div className={Styles.social_media_icon}>
            <img src={Images.Facebook} alt="facebook" />
            <img src={Images.Twitter} alt="twitter" />
            <img src={Images.Instagram} alt="instagram" />
          </div>

          <div className={Styles.services_tab}>
              <div className={Styles.footer_service}>
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
              <div className={Styles.footer_saas}>
                <h3>SaaS Solutions</h3>
                <p>Custom Portal</p>
                <p>School Management System</p>
                <p>ERP System</p>
                <p>Online Dating System</p>
                <p>Web Hosting Portal</p>
                <p>Bulk SMS Portal</p>
              </div>
              <div className={Styles.footer_product}>
                <h3>Products</h3>
                <p>Laundry App</p>
                <p>Logistic App</p>
                <p>Product</p>
                <p>Product</p>
                <p>Product</p>
              </div>
              <div className={Styles.footer_business}>
                <h3>For Business</h3>
                <p>Product for Business</p>
                <p>Product for Business</p>
                <p>Product for Business</p>
                <p>Product for Business</p>
                <p>Product for Business</p>
              </div>
              <div className={Styles.footer_startup}>
                <h3>For Startup</h3>
                <p>Service for Startup</p>
                <p>Service for Startup</p>
                <p>Service for Startup</p>
                <p>Service for Startup</p>
                <p>Service for Startup</p>
              </div>
              <div className={Styles.footer_institution}>
                <h3>For Institutions</h3>
                <p>Product for Healthcare</p>
                <p>Product for Education</p>
                <p>Prodcut for Media</p>
                <p>Product for Sports</p>
                <p>Product for Finance</p>
                <p>Product for </p>
              </div>
              <div className={Styles.footer_company}>
                <h3>Company</h3>
                <p>About us</p>
                <p>Careers</p>
                <p>Case Study</p>
                <p>Contact us</p>
                <p>Partners</p>
                <p>Blog</p>
              </div>
              <div className={Styles.footer_sitemap}>
                <h3>Site Map</h3>
                <p>Home</p>
                <p>Company</p>
                <p>Services</p>
                <p>Packages</p>
                <p>Contact</p>
              </div>
              <div className={Styles.footer_tohide}>
                <h3>To Hide</h3>
                <p>Home</p>
                <p>Company</p>
                <p>Services</p>
                <p>Packages</p>
                <p>Contact</p>
              </div>
          </div>

          <div className={Styles.footer_end}>
            <p>
             &copy; APPOGA TECHNOLOGIES LTD. All rights reserved. 2021. 
            Scrapabill Ltd is the joint venture partner and 
            exclusive corporate sponsor of Appoga Technologies 
            Limited and its brands. Contact Scrapabill for any legal 
            issures related to the services. Site designed and managed 
            by appoga.com 
            </p>
          </div>
      </footer>

    </div>
  )
}

export default AboutUs;