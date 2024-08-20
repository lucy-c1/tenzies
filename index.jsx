import React from 'react';
import ReactDOM from 'react-dom/client';
import Dice from "./Dice.jsx"

function App() {

  /*
  Names and functions:
  holdNumber(), holdIndexesArr (array of indexes that are on hold)
  numbersArr (array of the current 10 numbers)
  rollDice()
  1. holdNumber() function, prop for Dice, used for onclick in Dice
    - changes color to green
    - add the corresponding index to holdIndexesArr
    - changes color to white
    - remove corresponding index from holdIndexesArr
  2. rollDice() function, onclick inside App
    - generates n random numbers from 1-6 where n is 10 minus number
    of elements in holdIndexesArr
    - assign a number to each of the indexes in numbersArr that are
    not in holdIndexesArr
  3. Dice component props
    - holdNumber
    - index
    - numbersArr
  4. When page first loads, call rollDice() to set the initial values of numbersArr
  */
  // const [styles, setStyles] = React.useState({
  //   backgroundColor: "white"
  // })
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
    // if (!isHoldArr[index]) {
    //   setStyles({
    //     backgroundColor: "#59E391"
    //   })
    // } else {
    //   setStyles({
    //     backgroundColor: "white"
    //   })
    // }
    // flip the corresponding isHoldArr element 
    setIsHoldArr(function (prevIsHoldArr) {
      // const newArr = prevIsHoldArr.map(function (isHold, i) {
      //   return index === i ? !isHold : isHold;
      // });
      // console.log(newArr)
      return prevIsHoldArr.map(function (isHold, i) {
        return index === i ? !isHold : isHold;
      });
    })
  }
  
  return (
    <div className = "app-container">
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
          <button onClick = {rollDice} type="button" className="btn mt-5 roll-button shadow">Roll</button>
        </main>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 