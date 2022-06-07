import React from "react";
import classes from './blogSnippet.module.css'
import {Link} from 'react-router-dom'


interface blogs {
  id: string
  title: string 
  url: string 
   time :string
   image:string
}

const BlogPageSnippet = (props: blogs) => {
  return (
    <div className={classes.page_container}>
      <img className={classes.image} src={props.image}
       /> 
      <div>
  <Link to={`/blog/${props.id}`}>

      <a href={props.url}><h4 className={classes.pages_intro}>{props.title}</h4></a>
        <a href={props.url} className={classes.intro_para}>Created: {props.time}</a>
      </Link>
      </div>
    </div>
  );
}

export default BlogPageSnippet;
