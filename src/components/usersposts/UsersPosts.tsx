import "./style.css";
import Icon2 from "../../assets/image/Combined-Shape copy2.png";
import Icon3 from "../../assets/image/Combined-Shape copy3.png";
import Icon4 from "../../assets/image/Combined-Shape copy4.png";
import Icon5 from "../../assets/image/Combined-Shape copy5.png";

const UsersPosts = () => {
  return (
    <>
      <div className="frameDiv">
        <div className="frame">
          <div className="postsItemDiv">

            <div className="postItems">
              <span className="create">Create a Quote</span>
              <div className="icon-paraDiv">
              <img className="icons" src={Icon2} alt="icon" />
              <p className="responses">
                  Create a service quote for<br></br>users.
                </p>
                <button
                  name="button"
                  type="button"
                  className="fourBtn"
                >Create Quote</button>
              </div>
            </div>

            <div className="postItems">
              <span className="create">Post a Job</span>
              <div className="icon-paraDiv">
              <img className="icons" src={Icon5} alt="icon" />
              <p className="responses">
                  Post Job on your<br></br>job board.
                </p>
                <button
                  name="button"
                  type="button"
                  className="fourBtn"
                >Post Case Study</button>
              </div>
            </div>
          </div>

          <div className="postsItemDiv">
            <div className="postItems">
              <span className="create">Post a Case Study</span>
              <div className="icon-paraDiv">
              <img className="icons" src={Icon4} alt="icon" />
              <p className="responses">
                  Post a case study that <br></br>shows work carried out.
                </p>
                <button
                  name="button"
                  type="button"
                  className="fourBtn"
                >Post a Job</button>
              </div>
            </div>

            <div className="postItems">
              <span className="create">Respond to Customers</span>
              <div className="icon-paraDiv">
              <img className="icons" src={Icon3} alt="icon" />
                <p className="responses">
                  Respond to customers who<br></br>have contacted you.
                </p>
                <button
                  name="button"
                  type="button"
                  className="fourBtn"
                >Respond</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UsersPosts;

