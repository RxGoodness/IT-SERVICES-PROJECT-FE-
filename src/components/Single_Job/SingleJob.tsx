import React from 'react'

import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import SingleJobCss from './SingleJob.module.css'

interface Job{
   id: string | null
  title: string | null,
  description: string | null,
  image: string,
  location: string | null,
  employmentType: string | null,
  
}

const SingleJob = (props: Job) => {
  return (
     <article className={SingleJobCss.single_career}>
      <h1 className={SingleJobCss.top}>Animated Icon</h1>
      <div className={SingleJobCss.content}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>

      <div className={SingleJobCss.bottom}>
        <p>Location: {props.location}</p>
        <Link to={`/job/${props.id}`}>
          <span>See Details</span>
          <BiChevronRight />
        </Link>
      </div>
    </article>
  )
}

export default SingleJob
