import React, { useState, FormEvent, ChangeEvent } from "react";
import classes from "./CaseStudy.module.css";
import { AdminInput } from "../../components/adminInput/AdminInput";
import { AiOutlineLeft } from "react-icons/ai";
import { AdminButton } from "../../components/adminButton/AdminButton";
import { Alert } from "../../components/alert/AlertComponent";
import axios from "axios";
import EditorEditor from "../../components/Editor/Editor";
import { AdminUpload } from "../../components/AdminUpload/AdminUpload";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Iml0c2VydmljZS5saXZlcHJvamVjdEBnbWFpbC5jb20iLCJpYXQiOjE2NTQxMDMwNDF9.C6DKPy0PnoCe-kR5llzN69oXkOgcRxmIoFhVzG2cpTc";

const instance = axios.create({
  // baseURL: "http://localhost:4000",
  baseURL: "https://appoga.herokuapp.com/",
});
instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

const initialState = {
  name: "",
  description: "",
  alert: true,
  alertMessage: "",
  alertType: "",
};

export const CaseStudy: React.FC = ({}) => {
  const [value, setValue] = useState("");
  const [input, setInput] = useState(initialState);
  const [selectedImage, setSelectedImage] = useState<File | any>();
  const [image, setImage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const selectedImageFunc = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedImage(e.target.files![0]);
    setImage(e.target.files![0].name);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, description } = input;
    if (!name || !value || !description || selectedImage === undefined) {
      setInput({
        ...input,
        alert: true,
        alertMessage: "Please input all fields....",
        alertType: "danger",
      });
      clearAlert();
      return;
    }
    createFun();
  };

  const createFun = async () => {
    setInput({
      ...initialState,
      alert: true,
      alertMessage: "Creating Project....",
      alertType: "success",
    });
    const { name, description } = input;

    const fd = new FormData();
    fd.append("featuredImage", selectedImage);
    fd.append("name", name);
    fd.append("overview", description);
    fd.append("editor", value);

    try {
      const response = await instance.post("/projects", fd);
      if (response.status === 201) {
        setInput({
          ...initialState,
          alert: true,
          alertMessage: "Project Created....",
          alertType: "success",
        });
        setValue("");
        clearAlertSucess();
      }
    } catch (error) {
      setInput({
        ...input,
        alert: true,
        alertMessage: "Please input all fields....",
        alertType: "danger",
      });
      clearAlert();
      return;
    }
  };

  const clearAlert = () => {
    setTimeout(() => {
      setInput({ ...input, alert: false });
    }, 2000);
  };

  const clearAlertSucess = () => {
    setTimeout(() => {
      setInput({ ...initialState, alert: false });
    }, 2000);
  };

  return (
    <section className={classes.main_container}>
      <div className={classes.container}>
        {input.alert && (
          <Alert msg={input.alertMessage} style={input.alertType} />
        )}

        <div className={classes.header}>
          <AiOutlineLeft className={classes.arrow} />
          <p>Post a Case Study</p>
        </div>
        <hr className={classes.hr} />
        <form onSubmit={handleSubmit} className={classes.form}>
          <AdminInput
            labelText={"Project Name"}
            height={"53px"}
            name="name"
            handle={handleChange}
            value={input.name}
          />
          <AdminInput
            labelText={"Project Description"}
            height={"129px"}
            name="description"
            handle={handleChange}
            value={input.description}
          />
          {/* text edditor here */}

          <EditorEditor handleEditorChange={setValue} />

          {/* text edditor here */}

          <div className={classes.featuredImage}>
            <p className={classes.featuredText}> Featured Image</p>
            <div className={classes.imageSection}>
              <p>
                This image would be displayed as the banner of the Case Study
                once published.
              </p>
              <div className={classes.adminUpload}>
                <AdminUpload onChange={selectedImageFunc} />
                <span>{image}</span>
              </div>
            </div>
          </div>


          {input.alert && (
          <Alert msg={input.alertMessage} style={input.alertType} />
        )}
          <AdminButton buttonText="Post Case Study" />
        </form>
      </div>
    </section>
  );
};
