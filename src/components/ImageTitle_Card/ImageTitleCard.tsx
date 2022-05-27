// import "./ImageTitleCard.scss"
import ImageTitleCardStyles from './ImageTitleCard.module.scss'

interface ImageTitleCardProps {
    img: string;
    title: string;
}
const ImageTitleCard = ({img, title} : ImageTitleCardProps) => {
  return (
    <div className={ImageTitleCardStyles.solution_card}>
        <img src={img} alt={img} />
        <div className={ImageTitleCardStyles.card_footer}>
            <h5>{title}</h5>
        </div>
    </div>
  )
}

export default ImageTitleCard