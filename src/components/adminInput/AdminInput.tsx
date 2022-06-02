import React, {ChangeEvent} from "react";

import classes from "./AdminInput.module.css";

interface AdminInputProps {
    labelText:string
height: string
name: string
handle:(e:ChangeEvent<HTMLInputElement>)=> void
value:string
}

export const AdminInput: React.FC<AdminInputProps> = ({labelText, height, name, handle, value}) => {
  return (
    <>
      <label htmlFor="name">{labelText}</label>

      <input type="text" name= {name} className={classes.input} style={{height:height}} onChange = {handle} value = {value}/>
    </>
  );
};
