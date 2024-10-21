import React from 'react';

const PantallaInicio = ({ startGame }) => (
  <div>
    <h1>Desafío Matemático!</h1>
    <button onClick={startGame}>Comenzar</button>
  </div>
);

export default PantallaInicio;
