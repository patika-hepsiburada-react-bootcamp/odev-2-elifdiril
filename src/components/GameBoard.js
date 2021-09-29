import _word from 'an-array-of-english-words';
import Word from './Word';
import React, { useState, useEffect } from 'react';

const word = Word().toUpperCase();

function GameBoard({state, setState, setWinState}) {
    const alphabets = ["A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const [correctGuesses, setCorrectGuesses] = useState([])

    useEffect(() => {
        if(!maskedWord.includes("_")){
            setWinState(true);
        }
      }, [correctGuesses]);

    const maskedWord = word.split('').map(letter => correctGuesses.includes(letter) ? letter : "_").join(" ");

    return (
        <div>
            
            <p>{maskedWord}</p>
            {alphabets.map((alphabet, index) => <button key={index} onClick={() => {
                if (word.includes(alphabet)) {
                    setCorrectGuesses([...correctGuesses, alphabet]);
                }
                else {
                    setState(state + 1);
                }
            }}>{alphabet}</button>)}
            {!maskedWord.includes("_") && state < 5 && <p>You won!</p>}
            
            
        </div>
    );
}

export default GameBoard;