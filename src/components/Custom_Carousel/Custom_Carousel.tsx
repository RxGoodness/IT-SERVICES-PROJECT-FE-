import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselGroupedButton from './CarouselGroupedButton';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1619 },
      items: 3,
      slidesToSlide: 4, 
    },
    laptop: {
      breakpoint: { max: 1619, min: 1024 },
      items: 3,
      slidesToSlide: 2, 
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 2, 
    },
    mobile: {
      breakpoint: { max: 639, min: 0 },
      items: 1,
      slidesToSlide: 1, 
    },
  };
  
  const sliderParams : any = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: 'custom-carousel',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: <CarouselGroupedButton />,
    dotListClass: '',
    focusOnSelect: true,
    infinite: true,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: '',
  };
  
interface CarouselProps {
    children: React.ReactNode;
} 

const CustomCarousel = ({children} : CarouselProps ) => {
  return (
    <Carousel {...sliderParams}>
        {children}
    </Carousel>
  )
}

export default CustomCarousel