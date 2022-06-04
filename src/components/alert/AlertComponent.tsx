import React from "react";
import classes from "./Alert.module.css";
interface alertProps {
  msg: string;
  style: string;
}

export const Alert: React.FC<alertProps> = ({ msg, style }) => {
  return <div className={`${classes.alert} ${classes[style]}`}>{msg}</div>;
};



