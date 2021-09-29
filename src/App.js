import { useState, useEffect } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import Hangman from './components/Hangman';
import GameOver from './components/LottieComponents/GameOver';
import TryAgain from './components/LottieComponents/TryAgain';
import GetStarted from './components/LottieComponents/GetStarted';
import Win from './components/LottieComponents/Win';

function App() {
  const [state, setState] = useState(0);
  const [winState, setWinState] = useState(false);

  useEffect(() => {
    if (state === 5) {
      setState(0);
    }
  }, [state]);

  return (
    <div>
      {state > 4 && <div><GameOver /> <TryAgain /> </div>}{state} {state === 0 && <button><GetStarted /></button>}{winState && <Win />}
      <Hangman state={state} />
      <GameBoard state={state} setState={setState} setWinState={setWinState} />
    </div>
  );
}

export default App;
