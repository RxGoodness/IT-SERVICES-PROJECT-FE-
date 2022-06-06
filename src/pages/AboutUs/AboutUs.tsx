import Styles from './About.module.css';
import { Images } from './AboutUs.Images';



function About() {
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
                <div></div>
                

        </section>


    </div>
  )
}

export default About;