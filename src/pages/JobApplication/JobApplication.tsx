import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/jobapplication/web-development3.png";
import toolbox from "../../assets/images/jobapplication/toolbox-icon.png";
import locationIcon from "../../assets/images/jobapplication/location-icon.png";
import jobAppCss from "./jobApplication.module.css";
import Loader from "../../components/Loader/Loader";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  firstName: "",
  surname: "",
  DOB: "",
  country: "",
  address: "",
  email: "",
  phone: "",
  profileLink: "",
};

const JobApplication = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [cv, setCv] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const apply = async () => {
    const myFormData = new FormData();
    myFormData.append("firstName", formData.firstName);
    myFormData.append("surname", formData.surname);
    myFormData.append("DOB", formData.surname);
    myFormData.append("country", formData.country);
    myFormData.append("address", formData.address);
    myFormData.append("email", formData.email);
    myFormData.append("phone", formData.phone);
    myFormData.append("CV", cv);
    myFormData.append("coverLetter", coverLetter);
    myFormData.append("profileLink", formData.profileLink);
    myFormData.append("jobAppId", "629cb354b01aa52e05eccc4c");

    console.log(formData);
    try {
      toast.success("Application sucessful");
      setLoading(true);
      const response = await axios.post(
        "https://appoga.herokuapp.com/jobs/application",
        myFormData,
      );

      console.log(response);

      if (response.status === 404) {
      }
      setLoading(false);
      navigate("/jobs");
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Please make sure you input all fields");
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // for (var key of myFormData) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    apply();
  };

  const cvHandler = (e: any) => {
    setCv(e.target.files[0]);
    console.log(e.target.files[0]);
    console.log(cv);
  };

  const coverLetterHandler = (e: any) => {
    setCoverLetter(e.target.files[0]);
    console.log(e.target.files[0]);
    console.log(coverLetter);
  };

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
        <form onSubmit={handleSubmit}>
          <h4>Bio Data</h4>
          <div className={jobAppCss.bioData}>
            <input
              name="firstName"
              type="text"
              className={jobAppCss.inputField}
              onChange={handleChange}
              placeholder="Firstname"
            />
            <input
              name="surname"
              type="text"
              className={jobAppCss.inputField}
              placeholder="Surname"
              onChange={handleChange}
            />
            <input
              name="DOB"
              type="text"
              className={jobAppCss.inputField}
              placeholder="Date of Birth"
              onChange={handleChange}
            />
            <input
              name="country"
              type="text"
              className={jobAppCss.inputField}
              placeholder="Country"
              onChange={handleChange}
            />
          </div>

          <h4>Contact Details</h4>
          <div className={jobAppCss.contactDetails}>
            <input
              name="address"
              type="text"
              className={jobAppCss.inputField}
              placeholder="Home Address"
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              className={jobAppCss.inputField}
              placeholder="Email Address"
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              className={jobAppCss.inputField}
              placeholder="Phone Number"
              onChange={handleChange}
            />
            <input
              type="text"
              className={`${jobAppCss.vanish} ${jobAppCss.inputField}`}
            />
          </div>

          <h4>Qualification</h4>
          <div className={jobAppCss.qualification}>
            <input
              accept=".pdf, .jpeg, .jpg"
              name="cv"
              type="file"
              id="CV"
              className={jobAppCss.inputField}
              onChange={cvHandler}
            />
            <label htmlFor="CV" className={jobAppCss.inputField}>
              Upload cv
            </label>
            <input
              accept=".pdf, .jpeg, .jpg"
              name="coverLetter"
              type="file"
              id="coverLetter"
              className={jobAppCss.inputField}
              onChange={coverLetterHandler}
            />
            <label htmlFor="coverLetter" className={jobAppCss.inputField}>
              Upload cover letter
            </label>
            <input
              type="text"
              name="profileLink"
              className={jobAppCss.inputField}
              placeholder="Link to portfolio"
              onChange={handleChange}
            />
            <input
              type="text"
              className={`${jobAppCss.vanish} ${jobAppCss.inputField}`}
            />
          </div>
          {loading ? (
            <div className={jobAppCss.loading}>
              <Loader />
            </div>
          ) : (
            <input
              type="submit"
              value="Submit"
              className={jobAppCss.submitButton}
            />
          )}
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobApplication;
