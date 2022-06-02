import React from "react";
import "./pages-page.css";
import SearchIcon from "../../assets/image/Vector.png";
import landingPage from "../../assets/image/Landingpage.jpg";
import Pagesnippet from "./Pagesnippet";
import pageData from "../../utils/allpages"

interface PageCard {
  id: number;
  img: string;
  page: string;
  date: string;
  url: string;
}
const fakePageData: PageCard[] = [
  {
    id: 1,
    page: "Home",
    url: "thisistheurl.com",
    img: "/image/pages/Web.png",
    date: "10th Jan 2020",
  },

  {
    id: 2,
    page: "About",
    url: "thisistheurl.com",
    img: "./images/Vector.png",
    date: "11th Feb 2022",
  },
  {
    id: 3,
    page: "Contact",
    url: "thisistheurl.com",
    img: "./images/Vector.png",
    date: "12th Mar 2022",
  },
  {
    id: 4,
    page: "FAQ",
    url: "thisistheurl.com",
    img: "./images/Vector.png",
    date: "13th April 2022",
  },
  {
    id: 5,
    page: "Blog",
    url: "thisistheurl.com",
    img: "./images/Vector.png",
    date: "13th April 2022",
  }
];

let numberOfPages = fakePageData.length;

function Pagespage() {
  let pages = fakePageData.map((item) => {
    return (
      <Pagesnippet
        img={landingPage}
        url={item.url}
        title={item.page}
        time={item.date}
      />
    );
  });

  return (
    <div className="overall-container">
      <div className="pages--intro">
        <h4>Your Published Pages: {numberOfPages} </h4>
        <p className="intro-para">Any changes you make here will reflect directly on the pages.</p>
      </div>
      <hr />
      <div className="onsite--search">

          <img src={SearchIcon} className="vector"/>
          <button className="submit"> Submit </button>
          <input type="text" className="search-bar"/>
        </div>
      <div className="inner-bodycontainer">
        {pages}
      </div>
    </div>
  );
}

export default Pagespage;
