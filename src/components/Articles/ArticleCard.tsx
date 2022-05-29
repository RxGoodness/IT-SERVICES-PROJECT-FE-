import { FaCalendarMinus, FaArrowRight } from "react-icons/fa";
import articleStyle from "./Article.module.css";
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
      <div className={articleStyle.card}>
        <div className={articleStyle.card_img}>
          <img src={imgUrl} alt="logo" />
        </div>
        <div className={articleStyle.card_content}>
          <button className={articleStyle.card_button}>{category}</button>
          <div className={articleStyle.card_text}>{details}</div>
        </div>
        <div className={articleStyle.card_base}>
          <span className={articleStyle.left_base}>
            <FaCalendarMinus className={articleStyle.base_icon} />
          </span>
          {date}
          <span className={articleStyle.right_base}>
            Read more <FaArrowRight className={articleStyle.base_icon} />
          </span>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
