import React from "react";
import classes from "./AdminButton.module.css";

interface AdminButtonProps {
    buttonText:string
}

export const AdminButton: React.FC<AdminButtonProps> = ({buttonText}) => {
  return (
    <button type="submit" className={classes.btn}>
      {/* Post Case Study */}
      {buttonText}
    </button>
  );
};
