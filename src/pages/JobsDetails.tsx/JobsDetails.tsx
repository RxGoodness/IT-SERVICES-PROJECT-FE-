//import React from 'react'
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import classes from "./jobDetails.module.css";
import JobDetail from "../../components/Single_Job_Details/jobDetails";
import Loader from '../../components/Loader/Loader'

interface JobDetail{
  _id: string | null
 title: string | null,
 description: string | null,
 image: string,
 location: string | null,
 employmentType: string | null,
}

const JobsDetails = () => {
  const [job, setJobs] = useState<JobDetail>({_id: "",
    title: "" ,
    description: "",
    image: "",
    location: "",
    employmentType: ""});
  

  let {id} = useParams<{id:string}>();
  
  useEffect(() => { 
    const getJob = async () =>{
      try{      
      const response = await fetch(`https://appoga.herokuapp.com/jobs/${id}`)
      let data = await response.json(); 
      setJobs(data.data[0]);
    }catch (error:any) {
        console.log(error.response);
      }
    }
    getJob()
  },[]);

  return (
          <div>
                   <JobDetail
                  id = {job?._id}
                  title={job?.title}
                  description={job?.description}
                  image={job?.image}
                  location={job?.location}
                  employmentType={job?.employmentType} />
        </div>
    )
}
export default JobsDetails