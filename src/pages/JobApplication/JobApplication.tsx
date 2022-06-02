import React from "react";
import image from "../../assets/images/jobapplication/web-development3.png";
import toolbox from "../../assets/images/jobapplication/toolbox-icon.png";
import locationIcon from "../../assets/images/jobapplication/location-icon.png";
import jobAppCss from "./jobApplication.module.css";

const JobApplication = () => {
  return (
    <div className={jobAppCss.mainContainer}>
      <div className={jobAppCss.jobTitleContainer}>
        <img src={image} alt="" className={jobAppCss.jobImage} />
        <div className={jobAppCss.jobDescription}>
          <h1 className={jobAppCss.jobTitle}>Web Developer</h1>
          <p style={{ width: 232 }} className={jobAppCss.jobType}>
            <span>
              <img
                style={{ paddingLeft: 10 }}
                className={jobAppCss.imgStyle}
                src={toolbox}
                alt=""
              />
            </span>
            Full-time
          </p>
          <p style={{ width: 232 }} className={jobAppCss.jobLocation}>
            <span>
              <img className={jobAppCss.imgStyle} src={locationIcon} alt="" />
            </span>
            Abuja Niger
          </p>
        </div>
      </div>

      <div className={jobAppCss.formDiv}>
        <form>
          <h4>Bio Data</h4>
          <div className={jobAppCss.bioData}>
            <input
              type="text"
              className={jobAppCss.inputField}
              placeholder="Firstname"
            />
            <input
              type="text"
              className={jobAppCss.inputField}
              placeholder="Surname"
            />
            <input
              type="text"
              className={jobAppCss.inputField}
              placeholder="Date of Birth"
            />
            <input
              type="text"
              className={jobAppCss.inputField}
              placeholder="Country"
            />
          </div>

          <h4>Contact Details</h4>
          <div className={jobAppCss.contactDetails}>
            <input
              type="text"
              className={jobAppCss.inputField}
              placeholder="Home Address"
            />
            <input
              type="text"
              className={jobAppCss.inputField}
              placeholder="Email Address"
            />
            <input
              type="text"
              className={jobAppCss.inputField}
              placeholder="Phone Number"
            />
            <input
              type="text"
              className={`${jobAppCss.vanish} ${jobAppCss.inputField}`}
            />
          </div>

          <h4>Qualification</h4>
          <div className={jobAppCss.qualification}>
            <input type="text" className={jobAppCss.inputField} />
            <input type="text" className={jobAppCss.inputField} />
            <input
              type="text"
              className={jobAppCss.inputField}
              placeholder="Link to portfolio"
            />
            <input
              type="text"
              className={`${jobAppCss.vanish} ${jobAppCss.inputField}`}
            />
          </div>

          <input
            type="button"
            value="Submit"
            className={jobAppCss.submitButton}
          />
        </form>
      </div>
    </div>
  );
};

export default JobApplication;
