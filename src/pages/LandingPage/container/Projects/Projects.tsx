import React from 'react'
import CustomCarousel from '../../../../components/Custom_Carousel/Custom_Carousel'
import ImageTitleCard from '../../../../components/ImageTitle_Card/ImageTitleCard'
import { data } from './data'
import ProjectStyles from './Projects.module.scss'

const Projects = () => {
  return (
    <div className={ProjectStyles.projects}>
        <div className={ProjectStyles.project_container_title}>
            <h1>Featured Projects</h1>
            <p>Some of our projects</p>
        </div>

        <div className={ProjectStyles.project_container_cards}>
            <CustomCarousel>
                {
                    data.map(({img, title}) => (
                        <ImageTitleCard img={img} title={title} />
                    ))
                }
            </CustomCarousel>
        </div>

        <div className={ProjectStyles.small}><a href="##">see more</a></div>
    </div>
  )
}

export default Projects