import {useState, useEffect} from 'react'
import styles from './projectsComponents.module.css';
import axios from "axios"
import arrow from "../../assets/images/Projects/arrow.png";
import node from "../../assets/images/Projects/nodejs.png"
import html from "../../assets/images/Projects/html.png";
import css from "../../assets/images/Projects/css3.png"
import react from "../../assets/images/Projects/react.png"
import {Link} from 'react-router-dom'


function ProjectsComponent() {
    const [projects, setProjects] = useState([]);

    useEffect(() =>{
        requestProjects() 
    }, [])

    const requestProjects = async () => {
            const response = await axios('https://appoga.herokuapp.com/projects');
            setProjects(response.data)
    }

  return (
    <div className={styles.container}>
     {    
         projects.map((project: Record<string, string>)=> {
            
        return (
            <div className={styles.project} key={project._id}>
                <div className={styles.project_text}>
                <div className={styles.project_content}>
                    <h2>{project.name}</h2>
                    <p>{project.overview.substring(0, 100)}</p>
                    <div className={styles.viewCaseStudy}>
                        <h3>View Case Study</h3>
                        <Link to={`/projectDetails/${project._id}`} className={styles.link}><img src={arrow} alt="arrow" /></Link> 
                    </div>
                    
                </div> 
            
                <div className={styles.box}>
                    <img src={node} alt="node" />
                    <img src={react} alt="" />
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                </div>
            </div>
            <div className={styles.project_img}>
                <img src={project.featuredImage} alt="" />
                <div className={styles.box}></div>
            </div>
    </div>

         ) 
         })
     }         
    </div>
  )
}

export default ProjectsComponent