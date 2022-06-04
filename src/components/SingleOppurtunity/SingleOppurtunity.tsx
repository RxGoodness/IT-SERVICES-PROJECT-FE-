import React from 'react'
import JobsCss from '../../pages/Jobs/Jobs.module.css'

const SingleOppurtunity = () => {
  return (
    <article className={JobsCss.single_hiring}>
      <h1 className={JobsCss.top}>Animated Icon</h1>
      <div className={JobsCss.bottom}>
        <h1>01</h1>
        <h2>Send your CV</h2>
        <p>
          Submit your resume w  ith a cover letter describing your qualifications
        </p>
      </div>
    </article>
  )
}

export default SingleOppurtunity
