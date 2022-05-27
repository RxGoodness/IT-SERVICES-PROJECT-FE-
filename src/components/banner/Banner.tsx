import Button from '../button/Button'
// import "./Banner.scss"
import BannerStyles from './Banner.module.scss'

interface IProps {
    index: number;
    img:  string,
    title: string,
    content: string,
}

const Banner = ({index, img, title, content}: IProps) => {
  return (
    <div className={BannerStyles.banner__container} key={index}>
        <div className={BannerStyles.overlay}></div>
        <img src={img} className={BannerStyles.image} alt={img}/>
        <div className={BannerStyles.banner__content}>
            <h1 className={BannerStyles.banner__title}>{title}</h1>
            <p className={BannerStyles.banner__text}>
                {content}
            </p>
            <div className={BannerStyles.banner__footer}>
                <Button>Get a Quote</Button>
            </div>
        </div>
        
    </div>
  )
}

export default Banner