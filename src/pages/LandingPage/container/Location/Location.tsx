import React from 'react'
import LocationStyles from './Location.module.scss'
import { cell_phone, contact_icon } from '../../../../constants/image'
import { data } from './data'
import InputField from '../../../../components/Custom_InputField/InputField'
import Button from '../../../../components/button/Button'

const Location = () => {
  return (
    <div className={LocationStyles.location}>
        <div className={LocationStyles.location_container_title}>
            <h1>Our Locations</h1>
        </div>

        <div className={LocationStyles.location_content_container}>

            <div className={LocationStyles.location_space_container}>
                {
                    data && data.map(({id, name, img, tel, address}) => (
                        <div className={LocationStyles.location_content} key={id}>
                            <div className={LocationStyles.location_content_img}>
                                <img src={img} alt={img} />
                            </div>
                    
                            <h2>{name}</h2>
                            <div className={LocationStyles.img_text}>
                                <img src={cell_phone} alt="cell_phone" />
                                <p>{tel}</p>
                            </div>
                            <div className={LocationStyles.img_text}>
                                <img src={contact_icon} alt="contact_icon" />
                                
                                <p>{address}</p>
                            </div>
                    
                        </div>
                    ))
                }
            </div>
            
        </div>

        <div className={LocationStyles.location_contact}>
            <h1>Contact us</h1>

            <form className={LocationStyles.contact_form}>
                <div className={LocationStyles.contact_content}>
                    <div className={LocationStyles.aside_left}>
                        <InputField
                            type='text'
                            name='name'
                            value=''
                            placeholder='Name'
                            handleChange={() => {}}
                        />
                        <div className={LocationStyles.mata_input}/>
                        <InputField
                            type='email'
                            name='email'
                            value=''
                            placeholder='Email'
                            handleChange={() => {}}
                        />
                    </div>
                    <div className={LocationStyles.aside_right}>
                        <InputField
                            textArea={true}
                            name='message'
                            value=''
                            placeholder='Message'
                            handleChange={() => {}}
                            lg={true}
                        />
                    </div>
                </div>

                <div className={LocationStyles.contact_btn}>
                    <Button secondaryStyle={true}>Send</Button>
                </div>
                
            </form>
            
        </div>


    </div>
  )
}

export default Location