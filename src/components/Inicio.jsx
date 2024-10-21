import React from "react";
import { Button } from 'react-bootstrap';

function PantallaInicio({ startGame }) {
    return (
        <>
            <div className="container text-center text-bg-success p-3">
                <h1>BIENVENIDOS AL DESAFIO MATEMATICO +-x%</h1>
            </div>
            <span className="d-flex justify-content-center">
                <ul className="text-center mt-md-4">
                    <li>Hola! Esto es un juego de matematicas para entrenar en el mundo de los numeros y operaciones donde cada resultado puede ser correcto o incorrecto!</li>
                    <li>Dependiendo de tus aciertos, acumularas puntaje para saber cuanto sabes en matematicas!!!</li>
                </ul>
            </span>
            <div className="container text-center mt-md-5">
                <h5>BUENAS SUERTE EN ESTE PEQUEÑO EXAMEN!</h5>
                <Button variant="dark" onClick={() => startGame()}> EMPEZAR! </Button> {/* Cambié a una función flecha */}
            </div>
        </>
    );
}

export default PantallaInicio;

