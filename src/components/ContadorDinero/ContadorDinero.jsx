import React, { useState } from 'react';
import './ContadorDinero.css'; 

const ContadorDinero = () => {
  const [dinero, setDinero] = useState(0);

  const aumentarDinero = () => {
    setDinero(dinero + 10);
  };

  const disminuirDinero = () => {
    if (dinero > 0) {
      setDinero(dinero - 5);
    }
  };

  return (
    <div className="contador">
      <button className='disminuir' onClick={disminuirDinero}>-</button>
      <p>${dinero}</p>
      <button className="aumentar" onClick={aumentarDinero}>+</button>
    </div>
  );
};

export default ContadorDinero;
