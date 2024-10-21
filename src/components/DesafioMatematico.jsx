import React, { useState } from 'react';

const DesafioMatematico = ({ challenge, verifyAnswer }) => {
  const [userAnswer, setUserAnswer] = useState('');

  const handleSubmit = () => {
    verifyAnswer(userAnswer);
    setUserAnswer('');
  };

  return (
    <div>
      <h2>Resuelve: {challenge.num1} {challenge.operator} {challenge.num2}</h2>
      <input 
        type="number" 
        value={userAnswer} 
        onChange={(e) => setUserAnswer(e.target.value)} 
      />
      <button onClick={handleSubmit}>Verificar resultado</button>
    </div>
  );
};

export default DesafioMatematico;
