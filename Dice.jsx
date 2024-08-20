import React from "react"

export default function Dice(props) {
    const white = {
        backgroundColor: "white"
    };
    const green = {
        backgroundColor: "#59E391"
    };
    
    return (
        <button onClick = {function () {
            return props.holdNumber(props.index);
        }} 
        className = "dice-container shadow" 
        id = {"button" + props.index}
        style = {
            props.isHoldArr[props.index] ? green : white
        }
        >
            <p className = "dice-num">{props.numbersArr[props.index]}</p>
        </button>
    );
}