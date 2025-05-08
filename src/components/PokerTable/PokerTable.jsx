import React from "react";
import PlayerAvatar from "../PlayerAvatar/PlayerAvatar.jsx";
import ContadorDinero from "../ContadorDinero/ContadorDinero.jsx";
import RightMenu from "../RightMenu/RightMenu.jsx";
import LogoPoker from "../LogoPoker/LogoPoker.jsx";
import TableCards from "../TableCards/TableCards.jsx";
import "./PokerTable.css";
import PotBox from "../PotBox/PotBox.jsx";

const PokerTable = () => {
  return (
    <div className="poker-table-container">
      <RightMenu />
      <PotBox potAmount={1000} />
      <LogoPoker />
      <div className="poker-table"></div>

      <div className="top-row poker-row">
        <PlayerAvatar playerNumber={1} amount={2500} top="5%" left="25%" />
        <PlayerAvatar playerNumber={2} amount={3000} top="2%" left="47%" />
        <PlayerAvatar playerNumber={3} amount={4500} top="5%" left="70%" />
      </div>
      <div className="middle-row poker-row">
        <PlayerAvatar playerNumber={4} amount={2000} top="25%" left="16%" />
        <PlayerAvatar playerNumber={5} amount={5000} top="45%" left="16%" />
        <PlayerAvatar playerNumber={6} amount={5200} top="28%" left="76%" />
        <PlayerAvatar playerNumber={7} amount={4800} top="50%" left="76%" />
      </div>
      <div className="bottom-row poker-row">
        <PlayerAvatar playerNumber={8} amount={3900} top="65%" left="40%" />
        <PlayerAvatar playerNumber={9} amount={3100} top="65%" left="55%" />
      </div>

      <div className="contador-container">
        <ContadorDinero />
      </div>
    </div>
  );
};
export default PokerTable;
