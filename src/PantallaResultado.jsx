import React from 'react';

const PantallaResultado = ({ isCorrect, nextRound }) => (
  <div>
    <h2>{isCorrect ? "Correcto!" : "Incorrecto!"}</h2>
    <button onClick={nextRound}>Siguiente desafío</button>
  </div>
);

export default PantallaResultado;
