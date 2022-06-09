import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./jobDetails.module.css";
import Img from "../../assets/image/webDevelopment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface Job {
  id: string | null;
  title: string | null;
  description: string | null;
  image: string;
  location: string | null;
  employmentType: string | null;
}

const briefCase = <FontAwesomeIcon icon={faBriefcase} />;
const location = <FontAwesomeIcon icon={faMapMarkerAlt} />;

const JobDetail = (props: Job) => {
  return (
    <div className={classes.details}>
      <div className={classes.img}>
        <div>
          <img className={classes.image} src={props.image || Img} />
        </div>
        <div className={classes.titled}>
          <div>
            <h2>{props.title}</h2>
          </div>
          <div>
            <div>
              <p className={classes.para}>
                <i className={classes.briefCase}>{briefCase}</i>
                {props.employmentType || "Employment Type"}
              </p>
            </div>
            <div>
              <p className={classes.para}>
                <i className={classes.briefCase}>{location}</i>
                {props.location || "Location"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.body}>
        <div className={classes.title}>
          <h3>Location</h3>
          <p>{props.location}</p>
        </div>
        <div className={classes.title}>
          <h3>Employment Type</h3>
          <p>{props.employmentType}</p>
        </div>
        <div className={classes.title}>
          <h3>Description</h3>
          <p className={classes.description}>{props.description}</p>
        </div>
      </div>
      <div className={classes.apply}>
        <span className={classes.bottom}>
          <b>Join our global community</b>
          <Link to={`/jobApplication/${props.id}`}>
            <button className={classes.button}>Apply now</button>
          </Link>
        </span>
      </div>
      {/* </div> */}
    </div>
  );
};

export default JobDetail;
