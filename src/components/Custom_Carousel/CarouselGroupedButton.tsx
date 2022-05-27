import React from 'react'
import CarouselGrpStyle from './CarouselGrpBtn.module.scss'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const CarouselGroupedButton = ({ next, previous } : any) => {
    return (
        <section className={CarouselGrpStyle.carousel_btn_container}>
            <button onClick={previous}>
                <HiChevronLeft />
            </button>
            <div/>
            <button onClick={next}>
                <HiChevronRight />
            </button>
        </section>
    )
}

export default CarouselGroupedButton
