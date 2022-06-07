import { FaCalendarMinus, FaArrowRight } from "react-icons/fa";
import cardStyle from "./ArticleCard.module.css";
type PropsType = {
  //   [key: string]: any;
  data: {
    imgUrl: string;
    category: string;
    details: string;
    createdAt: string;
  };
};
const ArticleCard: React.FC<PropsType> = ({
  data: { imgUrl, category, details, createdAt },
}) => {
  //Convert date
  const date = new Date(createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <div className={cardStyle.card}>
        <div className={cardStyle.card_img}>
          <img src={imgUrl} alt="logo" />
        </div>
        <div className={cardStyle.card_content}>
          <button className={cardStyle.card_button}>{category}</button>
          <div className={cardStyle.card_text}>{details}</div>
        </div>
        <div className={cardStyle.card_base}>
          <div className={cardStyle.left_base}>
            <FaCalendarMinus className={cardStyle.base_icon} />
          </div>
          {date}
          <div className={cardStyle.right_base}>
            Read more{" "}
            <FaArrowRight color="#fff" className={cardStyle.base_icon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
