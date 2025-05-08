import React from "react";
import "./PlayerAvatar.css";
import avatar1 from "../../assets/avatars/avatar1.png";
import avatar2 from "../../assets/avatars/avatar2.png";
import avatar3 from "../../assets/avatars/avatar3.png";
import avatar4 from "../../assets/avatars/avatar4.png";
import avatar5 from "../../assets/avatars/avatar5.png";
import avatar6 from "../../assets/avatars/avatar6.png";
import avatar7 from "../../assets/avatars/avatar7.png";
import avatar8 from "../../assets/avatars/avatar8.png";
import avatar9 from "../../assets/avatars/avatar9.png";
const avatarMap = {
  1: avatar1,
  2: avatar2,
  3: avatar3,
  4: avatar4,
  5: avatar5,
  6: avatar6,
  7: avatar7,
  8: avatar8,
  9: avatar9,
};
const PlayerAvatar = ({ playerNumber, amount, top, left }) => {
  const avatar = avatarMap[playerNumber];

  const style = {
    top: top,
    left: left,
    position: "absolute",
  };

  return (
    <div className="player-avatar" style={style}>
      <img
        src={avatar}
        alt={`Avatar Player ${playerNumber}`}
        className="avatar-img"
      />
      <div className="player-info">
        <div className="amount-box">
          <p className="player-amount">{amount}</p>
        </div>
        <div className="player-number-box">
          <p className="player-name">{playerNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerAvatar;
