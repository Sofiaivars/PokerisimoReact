import React, { useState } from "react";
import "./PlayerCards.css";

const PlayerCards = ({ playerNumber, cards, top, left }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="player-cards-container"
      style={{ top: top, left: left }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {cards.map((card, index) => (
        <div key={index} className={`card ${isFlipped ? "flipped" : ""}`}>
          <img
            src={isFlipped ? card.image : "/assets/deck/back.png"}
            alt={`${card.rank} of ${card.suit}`}
          />
        </div>
      ))}
      <div className="player-number">Player {playerNumber}</div>
    </div>
  );
};

export default PlayerCards;
