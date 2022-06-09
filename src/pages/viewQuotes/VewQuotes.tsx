import React, { useEffect, useState } from "react";
import classes from "./ViewQuote.module.css";
import ViewQuoteCard from "../../components/viewQuoteCard/ViewQuoteCard";
import axios from "axios";
type Props = {};

type Data = {
  projectName: string;
  email: string;
  summary: string;
};

const ViewQuotes = (props: Props) => {
  const [state, setState] = useState<Array<Data>>([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Iml0c2VydmljZS5saXZlcHJvamVjdEBnbWFpbC5jb20iLCJpYXQiOjE2NTQxMDMwNDF9.C6DKPy0PnoCe-kR5llzN69oXkOgcRxmIoFhVzG2cpTc";

  const instance = axios.create({
    baseURL: "https://appoga.herokuapp.com/",
  });
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const fetchData = async () => {
    const response = await instance("/quotes");
    // console.log(response.data.data)
    setState(response.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(state)
  return (
    <section className={classes.vWMainContainer}>
      <div className={classes.vWContainer}>
        <header className={classes.vQHeader}>
          <h1>Quotes</h1>
          <h4>Quotes made by customer can be found here</h4>
          <hr />
        </header>
        <div className={classes.sort}>
          <h4>Sort By</h4>
        </div>
        <div className={classes.vQCards}>
          {state.map((each, index) => {
            return (
              <ViewQuoteCard
                name={each.projectName}
                email={each.email}
                description={each.summary}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ViewQuotes;
