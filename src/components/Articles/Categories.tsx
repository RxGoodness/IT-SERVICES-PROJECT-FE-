import articleStyle from "./Article.module.css";

type PropsType = {
  [key: string]: any;
};

const Categories: React.FC<PropsType> = ({ data }) => {
  return (
    <>
      <div className={articleStyle.container}>
        <div className={articleStyle.card_heading}>
          <h1>Category</h1>
        </div>
        {data.map((e: any) => (
          <button className={articleStyle.category_tile}>{e.category}</button>
        ))}
      </div>
    </>
  );
};

export default Categories;
