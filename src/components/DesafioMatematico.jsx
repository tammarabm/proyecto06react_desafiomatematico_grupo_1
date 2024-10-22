import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const DesafioMatematico = ({ challenge, verifyAnswer }) => {
  const [userAnswer, setUserAnswer] = useState('');

  const handleSubmit = () => {
    verifyAnswer(userAnswer);
    setUserAnswer('');
  };

  return (
    <div>
      <div className="container text-center text-bg-success p-3">
        <h1>DESAFIOS</h1>
      </div>
      <h2 className='text-center mt-md-5'>Resuelve: {challenge.num1} {challenge.operator} {challenge.num2}</h2>
      <div className='d-flex justify-content-center mt-md-5'>
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
      </div>
      <div className='d-flex justify-content-center mt-md-5'>
        <Button onClick={handleSubmit}>Verificar resultado </Button>
      </div>
    </div>
  );
};

export default DesafioMatematico;
