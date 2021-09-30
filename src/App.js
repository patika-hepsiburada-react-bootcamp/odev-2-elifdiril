import { useState, useEffect } from 'react';
import './App.css';
import _word from 'an-array-of-english-words';
import GameBoard from './components/GameBoard';
import Hangman from './components/Hangman';
import GameOver from './components/LottieComponents/GameOver';
import TryAgain from './components/LottieComponents/TryAgain';
import GetStarted from './components/LottieComponents/GetStarted';
import Win from './components/LottieComponents/Win';
import Restart from './components/LottieComponents/Restart';
import GameConsole from './components/LottieComponents/GameConsole';
import { Row, Col } from 'reactstrap';
import TableModal from './components/TableModal';

const UserList = [
  {
    "id": 0,
    "name": "elif",
    "point": 100,
  },
  {
    "id": 1,
    "name": "elif2",
    "point": 500,
  }
]

function App() {
  const [users, setUsers] = useState(JSON.stringify(UserList))
  const [state, setState] = useState(0);
  const [winState, setWinState] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [point, setPoint] = useState(0);
  const [userName, setUserName] = useState("");
  const [word, setWord] = useState(_word[Math.floor(Math.random() * _word.length)]);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    console.log(word)
    if (state === 5 && startGame) {
      setState(0);
      setGameOver(true);
      setStartGame(false);
      setPoint(0);
      updateLocalStorage();
    }
    if (state === 0) {
      setWord(_word[Math.floor(Math.random() * _word.length)]);
    }
    if (winState) {
      updateLocalStorage();
    }
  }, [state, winState]);

  const updateLocalStorage = () => {

    if (JSON.parse(localStorage.getItem('users')).length === 0) {
      localStorage.setItem('users', JSON.stringify(UserList));
    }

    let updatedUserList = JSON.parse(localStorage.getItem('users'));
    updatedUserList.push({ id: updatedUserList.length, name: userName, point: point });
    localStorage.setItem('users', JSON.stringify(updatedUserList));
    setUsers(JSON.stringify(updatedUserList));
  }

  let User = UserList;
  if (typeof users === 'string') {
    User = JSON.parse(users)
  }

  return (
    <div className="App">

      {/** Score Board Modal */}
      <TableModal modal={modal} toggle={toggle} />

      {/** Game Over !!!! */}
      {gameOver && <div><GameOver /></div>}

      {/** If the game playing for the first time, call GetStarted component */}
      {User.length === 2 && state === 0 && startGame === false &&
        <div >
          <GameConsole />
          <Col xs={2} className="col">
            <Row><input className="get-started-input" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter your Nick" /></Row>
            <Row><button className="get-started-button" onClick={() => {
              setStartGame(true); setGameOver(false);
            }}>
              <GetStarted /></button></Row>
          </Col>
        </div>}

      {/** If the game not playing for the first time, call TryAgain component */}
      {User.length > 2 && gameOver &&
        <button onClick={() => {
          setStartGame(true); setGameOver(false); setState(0);
        }}><TryAgain /></button>}

      {winState && <div><Win /><button className="restart-button" onClick={() => {
        setStartGame(true); setGameOver(false); setState(0); setWinState(false);
      }}><Restart /></button></div>}

      {startGame &&
      <div className="container">
          <Hangman state={state} />
          <GameBoard word={word} state={state} setState={setState} setWinState={setWinState} point={point} setPoint={setPoint} />
        </div>}
    </div>
  );
}

export default App;
