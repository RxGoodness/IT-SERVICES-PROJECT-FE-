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
        <div our-achievements>
            <p className="achievements">Our Achievements</p>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

        </div>
         
      </section>
      <footer>

      </footer>

    </div>
  )
}

export default About;