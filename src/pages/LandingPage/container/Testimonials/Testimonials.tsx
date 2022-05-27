import React from 'react'
import TestimonialStyles from './Testimonials.module.scss'
import { data } from './data'
import TestimonialCard from '../../../../components/Testimonial_Card/TestimonialCard'

const Testimonials = () => {
  return (
    <div className={TestimonialStyles.testimonials}>
        <div className={TestimonialStyles.testimonials_container_title}>
            <h1>Testimonials</h1>
        </div>

        <div className={TestimonialStyles.testimonial_content}>
            {
                data && data.map(({id, name, location, description}) => (
                    <TestimonialCard id={id} name={name} location={location} description={description}/>
                ))
            }
        </div>
    </div>
  )
}

export default Testimonials