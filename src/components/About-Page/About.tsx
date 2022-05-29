import React from 'react';
import './About.css';

function About() {
  return (
    <div className='wrapper'>
      <header>
          <p className="appoga-Logo"></p>
          <ul>
            <li className="home">Home</li>
            <li className="company">Company</li>
            <li className="services">Services</li>
            <li className="products">Products</li>
            <li className="packages">Packages</li>
            <li className="resources">Resources</li>
          </ul>
      </header>
      <section>
        <div className="about-appoga">
            <h3>About <span className='appoga-special'>Appoga</span></h3>
            <p className="info">We offer technological services for various industries or market globally</p>
            <div className="group-pic">
                <p className="pic pic-a"></p>
                <p className="pic pic-b"></p>
                <p className="pic pic-c"></p>
                <p className="pic pic-d"></p>
                <p className="pic pic-e"></p>
            </div>        
        </div>
        <div className="we-are-appoga">
            <p className="one para1">
            <strong>1st Paragraph</strong> Appoga Technologies was established in 2000. 
            In publishing and graphic design, Lorem ipsum is a placeholder text 
            commonly used to demonstrate the visual form of a document or a typeface without relying 
            on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. 
            It is also used to temporarily replace text in a process called greeking, which allows 
            </p>
            <p className="one para2">
            <strong>2nd Paragraph</strong> designers to consider the form of a webpage or publication, 
            without the meaning of the tfore final copy is available. It is also used to 
            temporarily replace text in a process called greeking, which allows designers 
            to consider the form of a webpage or publication, without the meaning of the temonstrate 
            the visual form of a document or a typef
            </p>
            <h3 className="one we-are">
            We are Appoga
            </h3>
            <p className="one holdHands"></p>
            <p className="one para3">
            Our Mission is to... In publishing and graphic design, Lorem ipsum is a placeholder 
            text commonly used to demonstrate the visual form of a document or a typeface without 
            relying on meaningful content. Loremonstrate the visual form of a document or a typeface 
            without relying on meaningful content. Lor
            </p>
            <p className="one para4">
            Our Vision is to... In publishing and graphic design, Lorem ipsum is a placeholder 
            text commonly used to demonstrate the visual form of a document or a typeface without 
            relying on meaningful content. Loremonstrate the visual form of a document or a typeface 
            without relying on meaningful content. Lor
            </p>
        </div>
        <div>
            <p className="achievements">Our Achievements</p>
            <ul className="stars">
              <li className="star-1"></li>
              <li className="star-2"></li>
              <li className="star-3"></li>
            </ul>
            <main className="msg-block">
              <div className="msg block-1">
                <p className="ellipse-1"></p>
                <p className="line-1"></p>
                <p>
                  Developed Over 100 websites for brands in Africa, North America, 
                  Europe and Asia
                </p>
              </div>
              <div className="msg block-2">
                <p className="ellipse-2"></p>
                <p className="line-2"></p>
                <p>
                  Developed Over 100 websites for brands in Africa, 
                  North America, Europe and Asia
                </p>
              </div>
              <div className="msg block-3">
                <p className="ellipse-3"></p>
                <p className="line-3"></p>
                <p>
                  Agile project management for multinational companies 
                  in Nigeria and Canada
                </p>
              </div>
              <div className="msg block-4">
                <p className="ellipse-4"></p>
                <p>
                  Agile project management for multinational companies 
                  in Nigeria and Canada
                </p>
              </div>
              <div className="msg block-5">
                <p className="ellipse-5"></p>
                <p>
                  Top 10 Modern Website Builders
                </p>
              </div> 
              <div className="msg block-6">
                <p className="ellipse-6"></p>
                <p>
                  Top 10 Modern Website Builders
                </p>
              </div>  
            </main>
            

        </div>
         
      </section>
      <footer>

      </footer>

    </div>
  )
}

export default About;