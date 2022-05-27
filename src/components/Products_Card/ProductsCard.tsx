import React from 'react'
import ProductCardStyles from './ProductsCard.module.scss'

interface IProps {
    img: string;
    title: string;
}

const ProductsCard = ({img, title} : IProps) => {
  return (
    <div className={ProductCardStyles.products__card}>
        <div className={ProductCardStyles.overlay}></div>
        <img src={img} alt={img} />
        <div className={ProductCardStyles.products_content}>
            <h1 className={ProductCardStyles.products_title}>{title}</h1>
        </div>
    </div>
  )
}

export default ProductsCard