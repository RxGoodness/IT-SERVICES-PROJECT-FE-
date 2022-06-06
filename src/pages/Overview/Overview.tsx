import React from 'react'
import './Overview.css'
import Linking from '../../components/linking/Linking';
import UsersPosts from '../../components/usersposts/UsersPosts';
import Activities from "../../components/activities/Activities";
// import FaqHeading from "../../components/faqheading/FaqHeading";

const Overview = () => {
  return (
     <div className="App">
      <Linking />
      <UsersPosts />
      <Activities />
    </div>
  )
}

export default Overview