import Styles from './AboutUs.module.css';
import { Images } from './AboutUs.Images';



const About = () => {

  return (
    <div className={Styles.container}>

        <section className={Styles.aboutAppoga}>
            <div className={Styles.intro}>
                <h4>About <span className={Styles.aboutAppogaCustomized}>Appoga</span></h4>
                <p className={Styles.info}>
                    We offer technological services for various 
                    industries or market globally
                </p>
            </div>
            <div className={Styles.pics}>
                <div className={Styles.hands}>
                    <p className={Styles.pic_a}></p>
                    <p className={Styles.pic_b}></p>
                    <p className={Styles.pic_c}></p>
                    <p className={Styles.pic_d}></p>
                    <p className={Styles.pic_e}></p>
                </div>
            </div> 
        </section>

        <section className={Styles.weAreAppoga}>
            <div className={Styles.left}>
                <p className={Styles.paragraph1}>
                    <strong>1st Paragraph</strong> Appoga Technologies was established in 2000. 
                    In publishing and graphic design, Lorem ipsum is a placeholder text 
                    commonly used to demonstrate the visual form of a document or a typeface without relying 
                    on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. 
                    It is also used to temporarily replace text in a process called greeking, which allows.
                </p>
                <p className={Styles.paragraph2}>
                    <strong>2nd Paragraph</strong> designers to consider the form of a webpage or publication, 
                    without the meaning of the tfore final copy is available. It is also used to 
                    temporarily replace text in a process called greeking, which allows designers 
                    to consider the form of a webpage or publication, without the meaning of the temonstrate 
                    the visual form of a document or a typef
                </p>
            </div>
            <div className={Styles.middle}>
                <h4 className={Styles.weAre}> We are Appoga</h4>
                <p className={Styles.handsTogether}></p>
            </div>
            <div className={Styles.right}>
                <p className={Styles.paragraph3}>
                    Our Mission is to... In publishing and graphic design, Lorem ipsum is a placeholder 
                    text commonly used to demonstrate the visual form of a document or a typeface without 
                    relying on meaningful content. Loremonstrate the visual form of a document or a typeface 
                    without relying on meaningful content. Lor
                </p>
                <p className={Styles.paragraph4}>
                    Our Vision is to... In publishing and graphic design, Lorem ipsum is a placeholder 
                    text commonly used to demonstrate the visual form of a document or a typeface without 
                    relying on meaningful content. Loremonstrate the visual form of a document or a typeface 
                    without relying on meaningful content. Lor
                </p>
            </div>
        </section>

        <section className={Styles.ourAchievements}>
                <div className={Styles.top}>
                    <div className={Styles.achievements}>Our Achievements</div>
                    <div className={Styles.stars}>
                      <img src={Images.Star_Icon} alt="star" />
                      <img src={Images.Star_Icon} alt="star" />
                      <img src={Images.Star_Icon} alt="star" />
                    </div>
                </div>
                <div className={Styles.bottom}>
                  <p className={Styles.ellipse_1}></p>
                  <p className={Styles.ellipse_2}></p>
                  <p className={Styles.ellipse_3}></p>
                  <p className={Styles.ellipse_4}></p>
                  <p className={Styles.ellipse_5}></p>
                  <p className={Styles.ellipse_6}></p>
                  <p className={Styles.line_1}></p>
                  <p className={Styles.line_2}></p>
                  <p className={Styles.line_3}></p>
                  <div className={Styles.first}>
                    <div className={Styles.one}>
                      <p>Developed Over 100 websites for brands in Africa, North America, Europe and Asia</p>
                    </div>
                    <div className={Styles.two}>
                      <p>Agile project management for multinational companies in Nigeria and Canada</p>
                    </div>
                    <div className={Styles.three}>
                      <p>Top 10 Modern Website Builders</p>
                    </div>
                  </div>  
                  <div className={Styles.second}>
                      <div className={Styles.four}>
                        <p>Developed Over 100 websites for brands in Africa, North America, Europe and Asia</p>
                      </div>
                      <div className={Styles.five}>
                        <p>Agile project management for multinational companies in Nigeria and Canada</p>
                      </div>
                      <div className={Styles.six}>
                        <p>Top 10 Modern Website Builders</p>
                      </div>
                    </div>
                </div>
        </section>

        <section className={Styles.whyJoinAppoga}>
          <div className={Styles.upper}>
              <h3>Why Join Appoga</h3>
              <p>Reach out to us if you are have the skills and passion 
                to be part of the growing IT industry
              </p>
          </div>
          <div className={Styles.lower}>
            <div className={Styles.left}>What you stand to gain when you join us?</div>
            <div className={Styles.right}>
              <div 
                className={Styles.personal}>
                <p>Personal Growth</p>
                <p>In publishing and graphic design, 
                  Lorem ipsum is a placeholder text commonly 
                  used to demonstrate the visual form of a document 
                  or a typeface without relying on meaning
                </p>
                <img className={Styles.dropdown1} src={Images.Dropdown} alt="dropdown" />
              </div>
              <div className={Styles.career}>
                <span>Career Development</span>
                <img className={Styles.dropdown2} src={Images.Dropdown} alt="dropdown" />
              </div>
              <div className={Styles.new}>
                <span>New Opportunities</span>
                <img className={Styles.dropdown3} src={Images.Dropdown} alt="dropdown" />
              </div>
              <div className={Styles.creating}>
                <span>Creating Leaders</span>
                <img className={Styles.dropdown4} src={Images.Dropdown} alt="dropdown" />
              </div>
              <img className={Styles.imghead} src={Images.Snow_Head} alt="snow man" />
              <img className={Styles.imgbody} src={Images.Snow_Body} alt="snow man" />
              <img className={Styles.imgarrow} src={Images.Snow_Arrow} alt="snow man" />
            </div>
          </div>
        </section>

        <section className={Styles.coreValues}>
            <div className={Styles.up}>
              <h3>Our Core Values</h3>
              <p>At Appoga, In publishing and graphic design, 
                Lorem ipsum is a placeholder text commonly used to 
                demonstrate the visual form of a document or a type
              </p>
            </div>
            <div className={Styles.down}>
              <div className={Styles.animated_Icon1}>
                <h3>ANIMATED ICON</h3>
                <h3>Core Value 1</h3>
                <h3>Core Value 1</h3>
              </div>
              <div className={Styles.animated_Icon2}>
                <h3>ANIMATED ICON</h3>
                <h3>Core Value 2</h3>
                <h3>Core Value 2</h3>
              </div>
              <div className={Styles.animated_Icon3}>
                <h3>ANIMATED ICON</h3>
                <h3>Core Value 3</h3>
                <h3>Core Value 3</h3>
              </div>
            </div>
        </section>

        <section className={Styles.freeQuote}>
            <div className={Styles.quote}>
              <h3>Get a Free Quote</h3>
              <p>Let’s begin by providing a free quotation for your project</p>
            </div>
            <div className={Styles.form}>
              <label htmlFor="name"></label>
              <input type="text" id="name" placeholder="Name"/>
              <label htmlFor="email"></label>
              <input type="email" id="email" placeholder="Email" />
              <label htmlFor="field"></label>
              <textarea className={Styles.textArea}name="" id="field" placeholder="Message" />
              <button 
                className={Styles.button} 
                type="submit">
                  <span>Get a Free Quote</span>
              </button>
            </div>
        </section>

    </div>
  )
}

export default About;





