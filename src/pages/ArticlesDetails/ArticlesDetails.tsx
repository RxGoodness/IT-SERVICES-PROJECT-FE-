import React,{ useState, useEffect} from 'react'
import styles from './ArticlesDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import calender from '../../assets/image/calender.png';
import articlesDetailsImage from '../../assets/image/articleDetailsImage.png';


interface Article {
  title: string
  message: string
  _id: string;
  category: string;
  summary: string;
  createdAt: string;
}

const initialValue ={
  title: "",
  message: "",
  _id: "",
  category: "",
  summary: "",
  createdAt: ""
}


const ArticlesDetails = () => {
    const [articleData, setArticleData] = useState<Article>(initialValue)
    const {id} = useParams()

    const getArticleData = async () => {
        const response = await axios(`https://appoga.herokuapp.com/blog/${id}`)
        setArticleData(response.data)

    }

    useEffect(() => {
      getArticleData()
    }, [])


    const {createdAt} = articleData
    const createDate = new Date(createdAt).toDateString();
  

  return (
    <div className={styles.main}>
         <div className={styles.container}>
          <section className={styles.articleDataContainer}>
          <div className={styles.articlesDataHeader}>
              <h2>{articleData.title}</h2>
              <div className={styles.date}>
                  <img src={calender} alt="" />
                  <h5>{createDate}</h5>
              </div>   
          </div>

          <div className={styles.articleImage}><img src={articlesDetailsImage} alt="" /></div>
          <div className={styles.articleText}><p></p></div>
          <div className={styles.socialLinks}> 
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
          </div>
      </section>
     
     

      <section className={styles.relatedArticlesContainer}> 

        <h2></h2>
        <div className={styles.relatedImages}>

          <div>
            <img src="" alt="" />
            <p></p>
          </div>

          <div>
            <img src="" alt="" />
            <p></p>
          </div>

          <div>
            <img src="" alt="" />
            <p></p>
          </div>             
        </div>
        <p></p>
      
      </section>


      <section className={styles.commentsContainer}>
          <form action="">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Add a comment here..." />
                <button type="submit">Send</button>

          </form>

      </section>



    </div>
    </div>
   
  )
}

export default ArticlesDetails