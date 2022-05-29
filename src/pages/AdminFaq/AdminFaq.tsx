import React from 'react'
import FaqHeading from '../../components/faqheading/FaqHeading'

import './AdminFaq.css'
const AdminFaq = () => {
  return (
      <>
       <div className="faqHeadingsCon">
        <span className="firstItem">Frenquently Asked Questions</span>
        <span className="secondItem">
          Frenquently asked questions and supporting answers regarding your
          services are displayed here
        </span>
        <span className="paralleLine"></span>
      </div>
      <FaqHeading />
      </>
   
  )
}

export default AdminFaq