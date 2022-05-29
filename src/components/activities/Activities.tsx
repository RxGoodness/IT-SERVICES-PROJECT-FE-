import {useState, useEffect} from 'react'
import "./style.css";
import Activity, { ActivityType } from '../activity/Activity';
import axios from "axios";


// const activities = [
//     {
//         message: "Content has been added on the Branding Service Page",
//         author: "Ugochi",
//         time: "9:15",
//         id: "1"
//     },
//     {
//         message: "Content has been added on the Branding Service Page",
//         author: "Ugochi",
//         time: "9:15",
//         id: "2"
//     },
//     {
//         message: "Content has been added on the Branding Service Page",
//         author: "Ugochi",
//         time: "9:15",
//         id: "3"
//     },
//     {
//         message: "Content has been added on the Branding Service Page",
//         author: "Ugochi",
//         time: "9:15",
//         id: "4"
//     }
// ];

function Activities() {
    const BASE_URL = "http://localhost:9000/activity/all";
    const [items, setItems] = useState<ActivityType[] | null>(null);

    useEffect(() => {
      axios.get(BASE_URL).then((res) => {
        console.log(res);
        setItems(res.data.slice(0,4));
      });
    }, []); 


    if (items === null) return <div>loading...</div>;

  return (
      <>
    <div className="expandCon">
    <h4 className='textActivity'>Activity</h4>
    {items.map((item) => (
        <Activity
          key={item._id}
          data={item}
        />
      ))}
    </div>
    </>
  )
}

export default Activities