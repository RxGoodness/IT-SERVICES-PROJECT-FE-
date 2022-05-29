import React from "react";
import "./pagesnippet.css";

function Pagesnippet({ img, title, url, time }) {
  return (
    <div className="page--container">
      <img src={img} />
      <div>
        <h4 className="pages--intro">{title}</h4>
        <a href={url} className="intro-para">Created: {time}</a>
      </div>
    </div>
  );
}

export default Pagesnippet;
