import React from "react";
import "./PotBox.css";

const PotBox = ({ potAmount }) => {
  return (
    <div className="pot-box">
      <div className="pot-label">Pot</div>
      <div className="pot-amount">${potAmount}</div>
    </div>
  );
};

export default PotBox;
