import React from 'react'
import { about_us } from '../../../../constants/image'
import AboutStyle from './About.module.scss'

const About = () => {
  return (
    <div className={AboutStyle.about_container}>
        <div className={AboutStyle.aside_left_item}>
            <picture>
                <img src={about_us} alt="about_pics"/>
            </picture>
        </div>
        <div className={AboutStyle.aside_right_item}>
            <div className={AboutStyle.about_content}>
                <h1>About Us</h1>
                <p>In publishing and graphic design, 
                    Lorem ipsum is a placeholder text 
                    commonly used to demonstrate the 
                    visual form of a document or a typeface 
                    without relying on meaningful content. 
                    Lorem ipsum may be used as a placeholder 
                    before final copy is available. It is also 
                    used to temporarily replace text in a process 
                    called greeking,
                </p>
                <div className={AboutStyle.small}><a href="##">Read more</a></div>
            </div>
        </div>
    </div>
  )
}

export default About