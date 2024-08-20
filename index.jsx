import React from 'react';
import ReactDOM from 'react-dom/client';
import Dice from "./Dice.jsx"

function App() {
  return (
    <div className = "app-container">
        <main className = "main-container">
          <h1 className = "h1">Tenzies</h1>
          <h2 className = "h5 pb-5">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h2>
          <div className = "container">
            <div className="row g-0">
              <div className="col">
                <Dice />
              </div>
              <div className="col">
                <Dice />
              </div>
              <div className="col">
                <Dice />
              </div>
              <div className="col">
                <Dice />
              </div>
              <div className="col">
                <Dice />
              </div>
            </div>
            <div className="row g-0 mt-5">
              <div className="col">
                <Dice />
              </div>
              <div className="col">
                <Dice />
              </div>
              <div className="col">
                <Dice />
              </div>
              <div className="col">
                <Dice />
              </div>
              <div className="col">
                <Dice />
              </div>
            </div>
          </div>
        </main>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 