import React from 'react'
import ServiceStyles from './Services.module.scss'
import { data } from './data'
import ServiceCard from '../../../../components/Service_Card/ServiceCard'

const Services = () => {
  return (
    <div className={ServiceStyles.service_container}>
        <h1>Our Services</h1>
        <div className={ServiceStyles.service_cards_section}>
            {
                data.map(({img, title, description}) => (
                    <ServiceCard img={img} title={title} description={description}/>
                ))
            }
        </div>
        <div className={ServiceStyles.small}><a href="##">see more</a></div>
    </div>
  )
}

export default Services