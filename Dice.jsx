import React from "react"

export default function Dice(props) {
    return (
        <button onClick = {() => props.holdNumber(props.index)} 
        className = "dice-container shadow" 
        id = {"button" + props.index}
        style = {props.styles}
        >
            <p className = "dice-num">1</p>
        </button>
    );
}