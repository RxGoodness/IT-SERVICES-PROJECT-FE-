import React, {useState, useEffect} from "react";
import classes from './Blog.module.css'
import SearchIcon from '../../assets/image/Vector.png'
import landingPage from '../../assets/image/Landingpage.jpg'
import BlogPagesnippet from "./blogSnippet";
import pageData from '../../utils/allpages'
import axios from 'axios'
import {Link} from 'react-router-dom'

interface blogs {
   _id: string 
  title: string 
  // url: string 
   time :string
   image:string
  createdAt: string
}

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  const getBlogs = async () => {
    const response = await axios.get('https://appoga.herokuapp.com/blog')
    // const response = await axios.get('http://localhost:3000/blog')
    setBlogs(response.data)
  }

  useEffect(() => {
    getBlogs()
  }, [])

  let blog = blogs.map((item: blogs) => {
    return (
      <BlogPagesnippet
        image={landingPage}
        key={item._id}
        id ={item._id}
        url={"/blog/:id"}
        title={item.title}
        time={item.createdAt}
      />
    );
  });

return(
  <div className={classes.overall_container}>
  <div className={classes.pages_intro}>
    <h4>Blog</h4>
    <p className={classes.intro_para}>Written blogs on your website are curated here</p>
    <hr className={classes.hr}/>
  </div>
  <div className={classes.minibody}>
  <div className={classes.searchAndDrafts}>
  <div className={classes.onsite_search}>
      <img src={SearchIcon} className={classes.vector}/>
      <button className={classes.submit}> Search </button>
      <input type="text" className={classes.search_bar}/>
    </div>
    <span className={classes.drafts}>Drafts</span>
    </div>
  <div className={classes.inner_bodycontainer}>
    {blog}
  </div>
  </div>
</div>
);
}
export default Blog;
