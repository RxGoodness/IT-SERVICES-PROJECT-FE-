import React from "react";
import classes from "./ViewQuoteCard.module.css";

type Props = {
  name: string;
  email: string;
  description: string;
};

const ViewQuoteCard = (props: Props) => {
  return (
    <div className={classes.mainContainer}>
      <header className={classes.cardHeader}>
        <div className={classes.headerTitle}>
          <div>
            <p>Name of Client:</p>
            <h3>{props.name}</h3>
          </div>
          <div>
            <p>Email Address:</p>
            <h3>{props.email}</h3>
          </div>
          {/* <div>
            <p>Phone Number:</p>
            <h3>08058097503</h3>
          </div>
          <div>
            <p>Technologies:</p>
            <h3>Software Developer</h3>
          </div> */}
        </div>

        <hr />
      </header>

      <div className={classes.mainContentDiv}>
        <h3>Description</h3>
        <p>
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
          faucibus id ipsum quis vestibulum nunc, egestas vestibulum rhoncus.
          Nec est facilisis ipsum quisque arcu velit curabitur urna non. Neque
          velit bibendum enim donec in id nullam. Tellus praesent at viverra
          aliquet est molestie. Aliquet fermentum pellentesque porta vivamus
          bibendum. Fermentum aliquet sem pulvinar pellentesque sed scelerisque
          turpis. Lectus eget viverra viverra libero arcu aliquet elementum
          etiam. Senectus ac urna, nisl fermentum leo. */}

          {props.description}
        </p>
      </div>

      <div className={classes.replyContainer}>
        <p>Reply</p>
      </div>
    </div>
  );
};

export default ViewQuoteCard;
