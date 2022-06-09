import React, { useEffect, useState } from 'react'
import JobsCss from './Jobs.module.css'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { BiChevronRight, BiChevronLeft, BiArrowBack } from 'react-icons/bi'
import SingleJob from '../../components/Single_Job/SingleJob'
import SingleOppurtunity from '../../components/SingleOppurtunity/SingleOppurtunity'
import axios from 'axios'
import Loader from '../../components/Loader/Loader'



interface Job {
  _id: string | null
  title: string | null
  description: string | null
  image: string
  location: string | null
  employmentType: string | null
}


const Jobs = () => {
  const [jobs, setJobs] = useState([])
  const [careers, setCareers] = useState([1, 2, 3, 4, 5]);
  const [loading, setLoading] = useState(false)

  const getJobs = async () => {
    setLoading(true)
    const response = await axios.get('https://appoga.herokuapp.com/jobs')
    setJobs(response.data)
    setLoading(false)
  }

  useEffect(() => {
    getJobs()
  }, [])
  return (
    <main className={JobsCss.main}>
      {/* Hero Section */}
      <section className={JobsCss.hero}>
        <div className={JobsCss.container}>
          <h1 className={JobsCss.section_title}>Your Passion Begins Here</h1>
          <p className={JobsCss.section_subtitle}>
            We are keenly looking to add passionate and
            <br /> brilliant minds to our team.
          </p>
        </div>
      </section>



      {/* Careers Section */}
      <section className={JobsCss.careers}>
        <div className={JobsCss.container}>
          <h1 className={JobsCss.section_title}>Our Oppurtunities</h1>
          <p className={JobsCss.section_subtitle}>
            Reach out to us if you are have the skills and passion to be part of
            the growing IT industry
          </p>




          {loading ? <div className={JobsCss.loading}>
<Loader /> 
</div> : <div className={JobsCss.careers_grid}>
            {jobs.map((job: Job) => {
              return (
                <SingleJob
                  key={job._id}
                  id = {job._id}
                  title={job.title}
                  description={job.description}
                  image={job.image}
                  location={job.location}
                  employmentType={job.employmentType}
                />
              )
            })}
          </div>}

          
        </div>
      </section>

      {/* Hiring Section */}

      <section className={JobsCss.hiring}>
        <div className={JobsCss.container}>
          <h1 className={JobsCss.section_title}>Our Oppurtunities</h1>
          <p className={JobsCss.section_subtitle}>
            Reach out to us if you are have the skills and passion to be part of
            the growing IT industry
          </p>
          <Splide
            hasTrack={false}
            aria-label='...'
            options={{
              rewind: true,
              pagination: false,
              width: 800,
              gap: '1rem',
              perPage: 3,
              breakpoints: {
                640: {
                  perPage: 1,
                },
              },
            }}
          >
            <div className={JobsCss.hiring_grid}>
              <SplideTrack>
                {careers.map((e, i) => {
                  return (
                    <SplideSlide key={i}>
                      <SingleOppurtunity />
                    </SplideSlide>
                  )
                })}
              </SplideTrack>
            </div>
            <div className={`splide__arrows ${JobsCss.arrows}`}>
              <BiChevronRight
                className={`splide__arrow splide__arrow--next ${JobsCss.edit_next}`}
              />
              <BiChevronLeft
                className={`splide__arrow splide__arrow--prev ${JobsCss.edit_prev}`}
              />
            </div>
          </Splide>
        </div>
        <button className={JobsCss.btn}>Apply Now</button>
      </section>
    </main>
  )
}

export default Jobs