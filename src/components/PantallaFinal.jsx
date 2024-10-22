import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const PantallaFinal = ({ points, resetearJuego }) => {
    return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <Card className="text-center" style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>
                Juego Terminado 
            </Card.Title>
            <Card.Text>
                Puntuacion Final: {points}/5
            </Card.Text>
            <Button variant="success" onClick={resetearJuego}> Reiniciar Juego</Button>
        </Card.Body>
    </Card>
    </div> 
    );
};

export default PantallaFinal;