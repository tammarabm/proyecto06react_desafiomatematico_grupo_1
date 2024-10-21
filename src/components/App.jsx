import { useState } from 'react'
import PantallaInicio from './PantallaInicio';
import DesafioMatematico from './DesafioMatematico';
import PantallaResultado from './PantallaResultado';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentChallenge, setCurrentChallenge] = useState({});
  const [points, setPoints] = useState(0);
  const [round, setRound] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const startGame = () => {
    setGameStarted(true);
    generateChallenge();
    setPoints(0);
    setRound(1);
  };

  const generateChallenge = () => {
    const isAddition = Math.random() > 0.5;
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;

    if (!isAddition && num1 < num2) {
      [num1, num2] = [num2, num1]; // Con esto nos aseguramos que la resta no sea negativa
    }

    setCurrentChallenge({
      num1,
      num2,
      operator: isAddition ? '+' : '-',
      correctAnswer: isAddition ? num1 + num2 : num1 - num2,
    });
  };

  const verifyAnswer = (userAnswer) => {
    if (parseInt(userAnswer) === currentChallenge.correctAnswer) {
      setPoints(points + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowResult(true);
  };

  const nextRound = () => {
    if (round < 5) {
      setRound(round + 1);
      generateChallenge();
      setShowResult(false);
    } else {
      alert(`Juego terminado! Puntuación final: ${points}/5`);
      setGameStarted(false);
    }
  };

  return (
    <div>
      {!gameStarted ? (
        <PantallaInicio startGame={startGame} />
      ) : showResult ? (
        <PantallaResultado isCorrect={isCorrect} nextRound={nextRound} />
      ) : (
        <DesafioMatematico challenge={currentChallenge} verifyAnswer={verifyAnswer} />
      )}
    </div>
  );
};

export default App;
