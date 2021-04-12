import React from "react";
import './CardInfo.css'
const CardInfo = ({ info }) => {
  return (
    <div className="d-flex justify-content-center col-md-4">
      <div className={`infoContainer info${info.background}`}>
        <h6 className="text-white">{info.title}</h6>
        <small className="text-white">{info.desc}</small>
      </div>
    </div>
  );
};

export default CardInfo;
