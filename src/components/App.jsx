import { useState } from 'react';
import PantallaInicio from './Inicio'; // Importar correctamente
import DesafioMatematico from './DesafioMatematico';
import PantallaResultado from './PantallaResultado';
import PantallaFinal from './PantallaFinal';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentChallenge, setCurrentChallenge] = useState({});
  const [points, setPoints] = useState(0);
  const [round, setRound] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [juegoTerminado, setJuegoTerminado] = useState(false); 

  const startGame = () => {
    console.log("Juego iniciado"); // Verificar si se llama a esta función
    setGameStarted(true);
    generateChallenge();
    setPoints(0);
    setRound(1);
    setJuegoTerminado(false);
  };

  const generateChallenge = () => {
    const isAddition = Math.random() > 0.5;
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;

    if (!isAddition && num1 < num2) {
      [num1, num2] = [num2, num1];
    }

    setCurrentChallenge({
      num1,
      num2,
      operator: isAddition ? '+' : '-',
      correctAnswer: isAddition ? num1 + num2 : num1 - num2,
    });
  };

  const verifyAnswer = (userAnswer) => {

    if (userAnswer === '') { // Verifica si la respuesta del usuario esta vacia
      return; // Sale de la funcion si no hay respuesta
    }

    if (parseInt(userAnswer) === currentChallenge.correctAnswer) {
      setPoints(points + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowResult(true);
  };

  const nextRound = () => {
    if (round < 6) {
      setRound(round + 1);
      generateChallenge();
      setShowResult(false);
    } else {
      setShowResult(false);
      setJuegoTerminado(true);
    }
  };

  const resetearJuego=()=>{
    setJuegoTerminado(false);
    setPoints(0);
    setRound(1);
    console.log(points);
  };

  return (
    <div>
      {!gameStarted ? (
        <PantallaInicio startGame={startGame} /> // Pasar la función correctamente
      ) : juegoTerminado ? (
        <PantallaFinal points={points} resetearJuego={resetearJuego} />
      ) : showResult ? (
        <PantallaResultado isCorrect={isCorrect} nextRound={nextRound} />
      ) : (
        <DesafioMatematico challenge={currentChallenge} verifyAnswer={verifyAnswer} />
      )}
    </div>
  );
};

export default App;
