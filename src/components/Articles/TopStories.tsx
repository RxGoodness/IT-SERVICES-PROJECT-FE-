import ArticleCard from "./ArticleCard";
import topStoriesStyle from "./TopStories.module.css";

type CategoriesData = {
  [key: string]: any;
};
const TopStories: React.FC<CategoriesData> = ({ data }) => {
  return (
    <>
      <div className={topStoriesStyle.container}>
        <div className={topStoriesStyle.card_heading}>
          <h1>Top Stories</h1>
        </div>
        {data.map((e: any, i: number) => (
          <ArticleCard key={i} data={e} />
        ))}
      </div>
    </>
  );
};

export default TopStories;
