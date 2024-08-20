import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Dice from "./Dice.jsx"
import Confetti from "react-confetti"

function App() {
  const [win, setWin] = React.useState(false);
  const [isHoldArr, setIsHoldArr] = React.useState([
    false, false, false, false, false, false, false, false, false, false
  ])

  function generateRandomNumbers(n) {
    const randomArr = []
    for (let i = 0; i < n; i++) {
      randomArr.push(Math.floor(Math.random() * 6 + 1));
    }
    return randomArr;
  }

  const [numbersArr, setNumbersArr] = React.useState(generateRandomNumbers(10));

  // call after every dice roll and hold
  function checkWin() {
    for (let i = 0; i < numbersArr.length - 1; i++) {
      if (!isHoldArr[i] || (numbersArr[i] !== numbersArr[i + 1])) {
        return false;
      }
    }
    return true;
  }

  function rollDice() {
    // generate random numbers but only update the index of numersArr if the corresponding index in isHoldArr is false 
    const randomArr = generateRandomNumbers(10);
    setNumbersArr(function (prevNumbersArr) {
      const newArr = prevNumbersArr.map(function (prevNumber, i) {
        return isHoldArr[i] ? prevNumber : randomArr[i];
      })
      console.log(newArr)
      return newArr
    })
  }

  function holdNumber(index) {
    console.log("holdNumber function. Selected index " + index);
    setIsHoldArr(function (prevIsHoldArr) {
      return prevIsHoldArr.map(function (isHold, i) {
        return index === i ? !isHold : isHold;
      });
    })
  }

  useEffect(function () {
    setWin(checkWin());
    if (win) {
      console.log("Great job!");
    }
  }, [isHoldArr])

  function startOver() {
    setWin(false);
    setIsHoldArr([
      false, false, false, false, false, false, false, false, false, false
    ])
    setNumbersArr(generateRandomNumbers(10));
  }
  
  return (
    <div className = "app-container">
      {win && 
      <div>
        <Confetti />  
      </div>}
      {win && 
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">Well done!</h4>
      </div>}

      <main className = "main-container">
        <h1 className = "h1">Tenzies</h1>
        <h2 className = "h5">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h2>
        <div className = "container">
          <div className="row g-0">
            <div className="col">
              <Dice 
              holdNumber = {holdNumber}
              index = {0}
              isHoldArr = {isHoldArr}
              numbersArr = {numbersArr}
              />
            </div>
            <div className="col">
              <Dice 
              holdNumber = {holdNumber}
              index = {1}
              isHoldArr = {isHoldArr}
              numbersArr = {numbersArr}
              />
            </div>
            <div className="col">
              <Dice 
              holdNumber = {holdNumber}
              index = {2}
              isHoldArr = {isHoldArr}
              numbersArr = {numbersArr}
              />
            </div>
            <div className="col">
              <Dice 
              holdNumber = {holdNumber}
              index = {3}
              isHoldArr = {isHoldArr}
              numbersArr = {numbersArr}
              />
            </div>
            <div className="col">
              <Dice 
              holdNumber = {holdNumber}
              index = {4}
              isHoldArr = {isHoldArr}
              numbersArr = {numbersArr}
              />
            </div>
          </div>
          <div className="row g-0 mt-5">
            <div className="col">
              <Dice 
              holdNumber = {holdNumber}
              index = {5}
              isHoldArr = {isHoldArr}
              numbersArr = {numbersArr}
              />
            </div>
            <div className="col">
              <Dice 
              holdNumber = {holdNumber}
              index = {6}
              isHoldArr = {isHoldArr}
              numbersArr = {numbersArr}
              />
            </div>
            <div className="col">
              <Dice 
              holdNumber = {holdNumber}
              index = {7}
              isHoldArr = {isHoldArr}
              numbersArr = {numbersArr}
              />
            </div>
            <div className="col">
              <Dice 
              holdNumber = {holdNumber}
              index = {8}
              isHoldArr = {isHoldArr}
              numbersArr = {numbersArr}
              />
            </div>
            <div className="col">
              <Dice 
              holdNumber = {holdNumber}
              index = {9}
              isHoldArr = {isHoldArr}
              numbersArr = {numbersArr}
              />
            </div>
          </div>
        </div>
        <button onClick = {function () {
          !win ? rollDice() : startOver()
        }} type="button" className="btn mt-5 roll-button shadow">{win ? "Start over" : "Roll"}</button>
      </main>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 