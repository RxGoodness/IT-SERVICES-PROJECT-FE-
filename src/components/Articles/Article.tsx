import TopStories from "./TopStories";
import Categories from "./Categories";

const data: any = [
  {
    category: "Technology",
    details: "This is a dummy data, It is supposed to be avery long one",
    imgUrl: "./sample.png",
    createdAt: "2011-10-05T14:48:00.000Z",
  },
  {
    category: "Science",
    details: "This is a dummy data, It is supposed to be avery long one",
    imgUrl: "./sample.png",
    createdAt: "2019-10-05T14:48:00.000Z",
  },
  {
    category: "Accountancy",
    details: "This is a dummy data, It is supposed to be avery long one",
    imgUrl: "./sample.png",
    createdAt: "2021-10-05T14:48:00.000Z",
  },
];

const Article = () => {
  return (
    <>
      <TopStories data={data} />
      <Categories data={data} />
    </>
  );
};

export default Article;
