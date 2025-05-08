import React from "react";
import "./TableCards.css";

const TableCards = ({ cards }) => {
  return (
    <div className="table-cards-container">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <img src={card.image} alt={`Card ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default TableCards;
