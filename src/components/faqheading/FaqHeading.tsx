import {useState, useEffect} from 'react'
import "./style.css";
import axios from "axios"
// import Icon from "../../assets/Vector.png";
import SingleFaq, { FaqsType } from '../singlefaq/SingleFaq';

// const faq = [
//     {
//         questions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//         answers: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//         isAnswered: false,
//         _id: "1"
//     },
//     {
//         questions: "Arcu felis bibendum ut tristique et egestas. Faucibus turpis in eu mi. Egestas dui id ornare arcu odio ut sem nulla pharetra. Justo eget magna fermentum iaculis eu non. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.",
//         answers: "Viverra maecenas accumsan lacus vel facilisis volutpat est velit. At auctor urna nunc id cursus metus aliquam eleifend mi. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.",
//         isAnswered: false,
//         _id: "2"
//     }
// ]

const FaqHeading = () => {
    const BASE_URL = "http://localhost:9000";
    const [items, setItems] = useState<FaqsType[] | null>(null);

    const getOptions = () => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imtlbm9zYWdpZTg4QGdtYWlsLmNvbSIsImlhdCI6MTY1MzU3Nzg1N30.-y-1LAk9CxeMd58n93sxTJsPgpiCG2osmiAp_ZZt8j8";
      const options = {
          headers: {
              Authorization: `Bearer ${token}`
          }
      };
      return options;
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/faqs`, getOptions()).then((res) => {
          console.log(res);
          setItems(res.data.slice(0,4));
        });
        // setItems(faq);
    }, []);

    const handleUpdate = (faq: FaqsType) => {
      axios.put(`${BASE_URL}/editfaq/${faq._id}`, faq, getOptions()).then((res) => {
        const updatedItems = items?.map((item: FaqsType) => {
          return item._id === faq._id ? faq : item;
        });
        setItems(updatedItems as FaqsType[]);
      });

      // const updatedItems = items?.map((item: FaqsType) => {
      //   return item._id === faq._id ? faq : item;
      // });
      // setItems(updatedItems as FaqsType[]);
    }

    const handleDelete = (id: string) => {
      axios.delete(`${BASE_URL}/deletefaq/${id}`, getOptions()).then((res) => {
        const updatedItems = items?.filter((item: FaqsType) => {
          return item._id !== id;
        });
        setItems(updatedItems as FaqsType[]);
      });

      // const updatedItems = items?.filter((item: FaqsType) => {
      //   return item._id !== id;
      // });
      // setItems(updatedItems as FaqsType[]);
    }

    if (items === null) return <div>loading...</div>;

  return (
    <>
      <div className="faqs-section-wrapper">
        <div className="questionsCon">
        {items.map((item) => (    
          <SingleFaq
            key={item._id}
            data={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
        </div>
        <button className="add-button">
          Add a Question
        </button>
      </div>
    </>
  );
};
export default FaqHeading;
