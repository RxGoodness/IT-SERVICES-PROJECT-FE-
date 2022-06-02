import React, { ChangeEvent } from "react";
import classes from "./AdminUpload.module.css";
import { FiUploadCloud } from "react-icons/fi";

interface AdminUploadProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const AdminUpload: React.FC<AdminUploadProps> = ({ onChange }) => {
  return (
    <div className={`${classes.wrapper} ${classes.uploadContainer}`}>
      <div className={`${classes.btnimg}`}>
        <FiUploadCloud className={classes.cloud} />
        <p> Upload</p>
      </div>
      <input type="file" accept="image/*" onChange={onChange} />
    </div>
  );
};
