import React from 'react';
import '../RightMenu/RightMenu.css';
import { FaCog, FaVolumeUp, FaQuestionCircle } from 'react-icons/fa'; 

const MenuIcons = () => {
  return (
    <div className="menu-icons">
      <div className="icon-box"><FaCog /></div>
      <div className="icon-box"><FaVolumeUp /></div>
      <div className="icon-box"><FaQuestionCircle /></div>
    </div>
  );
};

export default MenuIcons;