import React from 'react';
import ReactDOM from 'react-dom/client';
import Dice from "./Dice.jsx"

function App() {
  return (
    <div className = "app-container">
        <main className = "main-container">
          <h1 className = "h1">Tenzies</h1>
          <h2 className = "h2">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h2>
          
        </main>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 