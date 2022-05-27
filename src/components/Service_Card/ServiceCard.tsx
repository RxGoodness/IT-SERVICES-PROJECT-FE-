import React from 'react'
// import './ServiceCard.scss'
import ServiceCardStyles from './ServiceCard.module.scss'

interface IProps {
  img: string;
  title: string;
  description?: string;
}

const ServiceCard = ({img, title, description} : IProps) => {
  return (
    <div className={ServiceCardStyles.service__card}>
        <div className={ServiceCardStyles.overlay}></div>
        <img src={img} alt={img} />
        <div className={ServiceCardStyles.service_content}>
            <h1 className={ServiceCardStyles.service_title}>{title}</h1>
            <p className={ServiceCardStyles.service_text}>{description}</p>
        </div>
    </div>
  )
}

export default ServiceCard