import { useEffect, useState } from "react";
import "./TurnTimer.css";

const TurnTimer = ({ turn, setTurn }) => {
  const [currentPlayer, setCurrentPlayer] = useState(turn);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    setCurrentPlayer(turn);
  }, [turn]);

  useEffect(() => {
    setTimeLeft(10);
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    const timeout = setTimeout(() => {
      console.log(`Jugador ${currentPlayer} termino el tiempo`);
      setTurn((prev) => (prev % 9) + 1);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [currentPlayer, setTurn]);
  const handleNextPlayer = () => {
    setTurn((prev) => (prev % 9) + 1);
  };

  return (
    <div className="turn-timer">
      <h2>Turno del jugador {currentPlayer}</h2>
      <p>Tiempo restante: {timeLeft} segundos</p>
      <button onClick={handleNextPlayer} className="action-button">
        Siguiente Jugador
      </button>
    </div>
  );
};

export default TurnTimer;
