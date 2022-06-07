import { useState } from "react";
import "./style.css";

export interface ActivityType {
    _id: string;
    message: string;
    createdAt: string;
    author: string;
}

function Activity({data}: {data:ActivityType}) {
  const {message, author} = data;
  const [bottomClass, setBottomClass] = useState("bottom hide");
  const [buttonText, setButtonText] = useState("Expand");

  const toggleBottom = () => {
    if (bottomClass === "bottom") {
      setBottomClass("bottom hide");
      setButtonText("Expand")
    } else {
      setBottomClass("bottom");
      setButtonText("Collapse");
    }
  };
  
  return (
    <div className="expand">
      <div className="top">
        <h3 className="h3">
          {message}
        </h3>
        <button className="h3" type="button" onClick={toggleBottom}>
          {buttonText}
        </button>
      </div>
      <div className={bottomClass}>
        <span className="time">9:15</span>
        <span className="author">{author}</span>
      </div>
    </div>
  );
}

export default Activity;
