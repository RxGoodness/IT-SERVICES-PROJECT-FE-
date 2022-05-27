import React from 'react'
import ProductsCard from '../../../../components/Products_Card/ProductsCard'
import { data } from './data'
import ProductStyles from './Products.module.scss'

const Products = () => {
  return (
    <div className={ProductStyles.products}>
        <div className={ProductStyles.product_container_title}>
            <h1>Some of our Products</h1>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used</p>
        </div>

        <div className={ProductStyles.product_card_container}>
            {
                data.map(({img, title}) => (
                    <ProductsCard img={img} title={title}/>
                ))
            }
        </div>
        <div className={ProductStyles.small}><a href="##">see more</a></div>
    </div>
  )
}

export default Products
