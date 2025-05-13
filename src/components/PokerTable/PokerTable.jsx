import React from "react";
import { useState } from "react";
import PlayerAvatar from "../PlayerAvatar/PlayerAvatar.jsx";
import ContadorDinero from "../ContadorDinero/ContadorDinero.jsx";
import RightMenu from "../RightMenu/RightMenu.jsx";
import LogoPoker from "../LogoPoker/LogoPoker.jsx";
import "./PokerTable.css";
import PotBox from "../PotBox/PotBox.jsx";
import TurnTimer from "../TurnTimer/TurnTimer.jsx";
import PlayerCards from "../PlayerCards/PlayerCards.jsx";

const backCards = [
  { image: "/deck/back.png" },
  { image: "/assets/deck/back.png" },
];
const PokerTable = () => {
  const [turn, setTurn] = useState(1);
  return (
    <div className="poker-table-container">
      <RightMenu />
      <PotBox potAmount={1000} />
      <LogoPoker />
      <div className="poker-table"></div>
      <div className="players-layer">
        <div className="top-row poker-row">
          <PlayerAvatar playerNumber={1} amount={2500} top="5%" left="30%" />
          <PlayerCards
            playerNumber={1}
            cards={backCards}
            top="12%"
            left="25%"
          />
          <PlayerAvatar playerNumber={2} amount={3000} top="0%" left="47%" />
          <PlayerCards
            playerNumber={2}
            cards={backCards}
            top="18%"
            left="49%"
          />
          <PlayerAvatar playerNumber={3} amount={4500} top="5%" left="62%" />
          <PlayerCards
            playerNumber={3}
            cards={backCards}
            top="12%"
            left="72%"
          />
        </div>
        <div className="middle-row poker-row">
          <PlayerAvatar playerNumber={4} amount={2000} top="25%" left="12%" />
          <PlayerCards
            playerNumber={4}
            cards={backCards}
            top="32%"
            left="22%"
          />
          <PlayerAvatar playerNumber={5} amount={5000} top="45%" left="12%" />
          <PlayerCards
            playerNumber={5}
            cards={backCards}
            top="52%"
            left="22%"
          />
          <PlayerAvatar playerNumber={6} amount={5200} top="28%" left="80%" />
          <PlayerCards
            playerNumber={6}
            cards={backCards}
            top="35%"
            left="75%"
          />
          <PlayerAvatar playerNumber={7} amount={4800} top="50%" left="80%" />
          <PlayerCards
            playerNumber={7}
            cards={backCards}
            top="57%"
            left="75%"
          />
        </div>
        <div className="bottom-row poker-row">
          <PlayerAvatar playerNumber={8} amount={3900} top="65%" left="40%" />
          <PlayerCards
            playerNumber={8}
            cards={backCards}
            top="72%"
            left="35%"
          />
          <PlayerAvatar playerNumber={9} amount={3100} top="65%" left="55%" />
          <PlayerCards
            playerNumber={9}
            cards={backCards}
            top="72%"
            left="65%"
          />
        </div>
      </div>
      <div className="contador-container">
        <ContadorDinero />
      </div>
      <div className="turn-container">
        <TurnTimer turn={turn} setTurn={setTurn} />
      </div>
    </div>
  );
};
export default PokerTable;
