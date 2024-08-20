import React from "react"

export default function Dice(props) {
    const [styles, setStyles] = React.useState({
        backgroundColor: "white"
    });

    function changeColor() {
        if (!props.isHoldArr[props.index]) {
            setStyles({
                backgroundColor: "#59E391"
            })
        } else {
            setStyles({
                backgroundColor: "white"
            })
        }
    }
    
    return (
        <button onClick = {function () {
            changeColor();
            return props.holdNumber(props.index);
        }} 
        className = "dice-container shadow" 
        id = {"button" + props.index}
        style = {styles}
        >
            <p className = "dice-num">{props.numbersArr[props.index]}</p>
        </button>
    );
}