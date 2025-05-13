import React, { useState } from "react";
import "./PlayerCards.css";

const PlayerCards = ({ playerNumber, cards = [], top, left }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="player-cards-container"
      style={{ position: "absolute", top, left }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {cards.map((card, index) => (
        <div key={index} className={`card ${isFlipped ? "flipped" : ""}`}>
          <img
            src={isFlipped ? card.image : "/assets/deck/back.png"}
            alt={`card-${index}`}
          />
        </div>
      ))}
      <div className="player-number">Player {playerNumber}</div>
    </div>
  );
};

export default PlayerCards;
