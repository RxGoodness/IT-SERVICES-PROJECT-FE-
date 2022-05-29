import ArticleCard from "./ArticleCard";
import articleStyle from "./Article.module.css";

type CategoriesData = {
  [key: string]: any;
};
const TopStories: React.FC<CategoriesData> = ({ data }) => {
  return (
    <>
      <div className={articleStyle.container}>
        <div className={articleStyle.card_heading}>
          <h1>Top Stories</h1>
        </div>
        {data.map((e: any) => (
          <ArticleCard data={e} />
        ))}
      </div>
    </>
  );
};

export default TopStories;
