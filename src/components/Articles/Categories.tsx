import categoryStyle from "./Categories.module.css";

type PropsType = {
  [key: string]: any;
};

const Categories: React.FC<PropsType> = ({ data }) => {
  return (
    <>
      <div className={categoryStyle.container}>
        <div className={categoryStyle.card_heading}>
          <h1>Category</h1>
        </div>
        {data.map((e: any, i: number) => (
          <button key={i} className={categoryStyle.category_tile}>
            {e.category}
          </button>
        ))}
      </div>
    </>
  );
};

export default Categories;
