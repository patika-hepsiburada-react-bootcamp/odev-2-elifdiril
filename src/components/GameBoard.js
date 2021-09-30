import React, { useState, useEffect } from 'react';

function GameBoard({word, state, setState, setWinState, point, setPoint}) {
    const alphabets = ["A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const [correctGuesses, setCorrectGuesses] = useState([])

    useEffect(() => {
        if(state === 0){
            setCorrectGuesses([]);
        }
      }, [state]);


    useEffect(() => {
        if(!maskedWord.includes("_")){
            setWinState(true);
            setPoint(100 * word.length)
        }
      }, [correctGuesses]);

    const maskedWord = word.split('').map(letter => correctGuesses.includes(letter) ? letter : "_").join(" ");

    return (
        <div>
            <p>{maskedWord}</p>
            {alphabets.map((alphabet, index) => <button key={index} onClick={() => {
                if (word.toLowerCase().includes(alphabet.toLowerCase())) {
                    setCorrectGuesses([...correctGuesses, alphabet.toLowerCase()]);
                }
                else {
                    setState(state + 1);
                }
            }}>{alphabet}</button>)}
           
        </div>
    );
}

// {!maskedWord.includes("_") && state < 5 && <p>You won!</p>}
export default GameBoard;