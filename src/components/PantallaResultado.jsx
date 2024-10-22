import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const PantallaResultado = ({ isCorrect, nextRound }) => {
  return (
  <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <Card className="text-center" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{isCorrect ? "¡Correcto!" : "¡Incorrecto!"}</Card.Title>
        <Button variant="success" onClick={nextRound}> Siguiente desafío</Button>
      </Card.Body>
    </Card>
  </div> 
  );
};

export default PantallaResultado;
