import React from "react";
import "./style.css";
import Icon from "../../assets/image/Combined-Shape.png";

function Linking() {
  return (
    <div className="linksCon">
      <h1 className="welcome">Welcome, you're logged in as</h1>
      <div className="btnDiv">
        <button className="btn">Quick Links</button>
        <div className="plus">
          <img className="icons" src={Icon} alt="icon" />
        </div>
        <button className="btn">Add Links</button>
      </div>
    </div>
  );
}

export default Linking;
