import React from "react";
import PlayerAvatar from "../PlayerAvatar/PlayerAvatar.jsx";
import ContadorDinero from "../ContadorDinero/ContadorDinero.jsx";
import RightMenu from "../RightMenu/RightMenu.jsx";
import LogoPoker from "../LogoPoker/LogoPoker.jsx";
import "./PokerTable.css";

const PokerTable = () => {
  return (
    <div className="poker-table-container">
      <RightMenu />
      <LogoPoker />
      <div className="poker-table"></div>
      <div className="top-row poker-row">
        <PlayerAvatar playerNumber={1} amount={2500} position="top-left" />
        <PlayerAvatar playerNumber={2} amount={3000} position="top" />
        <PlayerAvatar playerNumber={3} amount={4500} position="top-right" />
      </div>
      <div className="middle-row poker-row">
        <PlayerAvatar playerNumber={4} amount={2000} position="left-top" />
        <PlayerAvatar playerNumber={5} amount={5000} position="left-bottom" />
        <PlayerAvatar playerNumber={6} amount={5200} position="right-top" />
        <PlayerAvatar playerNumber={7} amount={4800} position="right-bottom" />
      </div>
      <div className="bottom-row poker-row">
        <PlayerAvatar playerNumber={8} amount={3900} position="bottom-left" />
        <PlayerAvatar playerNumber={9} amount={3100} position="bottom-right" />
      </div>
      <div className="contador-container">
        <ContadorDinero />
      </div>
    </div>
  );
};
export default PokerTable;
