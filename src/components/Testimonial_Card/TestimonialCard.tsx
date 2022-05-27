import React from 'react'
import TestimonialStyles from './TestimonialCard.module.scss'

interface Props {
    id: number;
    name: string;
    location: string;
    description: string;
}

const TestimonialCard = ({id, name, location, description} : Props) => {
  return (
    <div className={TestimonialStyles.testimonial_card} key={id}>
        <p>{description}</p>
        <div className={TestimonialStyles.testimonial_card_footer}>
            <h5>{name}</h5>
            <p>{location}</p>
        </div>
    </div>
  )
}

export default TestimonialCard