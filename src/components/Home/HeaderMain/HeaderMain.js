import React from "react";
import chair from "../../../images/chair.png";
import appointment from "../../../images/appoinetment.png";
import dev from "../../../images/dev.jpg";
import "./HeaderMAin.css";
const HeaderMain = () => {
  return (
    <main class="row d-flex align-items-center ms-5 mx-auto mt-5 main">
      <div className="col-md-4">
        <h2>
          Your New Smile <br /> Starts Here
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
          provident tempore. Sed ipsa asperiores tenetur.
        </p>
        <button className="btn btn-danger">
          {" "}
          <img src={appointment} alt="" width="30px" /> GET APPOINTMENT
        </button>
      </div>
      <div className="col-md-6 container-fluid">
        <img src={dev} alt="" width="100%" />
      </div>
    </main>
  );
};

export default HeaderMain;
