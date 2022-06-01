import React, { useState, FormEvent, ChangeEvent } from "react";
import classes from "./CreateBlog.module.css";
import { AdminInput } from "../../components/adminInput/AdminInput";
import { Alert } from "../../components/alert/AlertComponent";
import axios from "axios";

const initialState = {
  title: "",
  message: "",
  description: "",
  summary: "",
  category: "",
  alertMessage: "",
  alert: false,
  alertType: "",
};

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Iml0c2VydmljZS5saXZlcHJvamVjdEBnbWFpbC5jb20iLCJpYXQiOjE2NTQxMDMwNDF9.C6DKPy0PnoCe-kR5llzN69oXkOgcRxmIoFhVzG2cpTc";

const instance = axios.create({
  // baseURL: "http://localhost:4000/blog",
  baseURL: "https://appoga.herokuapp.com/blog",
});
instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export const CreateBlog: React.FC = ({}) => {
  const [input, setInput] = useState(initialState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, message, description, summary, category } = input;
    if (!title || !message || !description || !summary || !category) {
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const createFun = async () => {
    const { title, message, description, summary, category } = input;
    try {
      const response = await instance.post("/create", {
        title,
        message,
        description,
        summary,
        category,
      });
      console.log(response.status);
      if (response.status === 200) {
        setInput({
          ...initialState,
          alert: true,
          alertMessage: "Blog Post Created....",
          alertType: "success",
        });
        clearAlertSucess();
      }
    } catch (error) {
      setInput({
        ...input,
        alert: true,
        alertMessage: "Wrong Input....",
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
      <form className={classes.container} onSubmit={handleSubmit}>
        {input.alert && (
          <Alert msg={input.alertMessage} style={input.alertType} />
        )}
        <AdminInput
          labelText="Title"
          height="40px"
          name="title"
          handle={handleChange}
          value={input.title}
        />

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          onChange={handleTextArea}
          value={input.message}
        ></textarea>
        <AdminInput
          labelText="Description"
          height="40px"
          name="description"
          handle={handleChange}
          value={input.description}
        />
        <AdminInput
          labelText="Summary"
          height="40px"
          name="summary"
          handle={handleChange}
          value={input.summary}
        />
        <AdminInput
          labelText="Category"
          height="40px"
          name="category"
          handle={handleChange}
          value={input.category}
        />
        <button type="submit" className={classes.btn}>
          Submit
        </button>
      </form>
    </section>
  );
};
