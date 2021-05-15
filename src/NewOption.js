import Confetti from 'react-dom-confetti';
// import {useState} from "react";

export default function NewOption({setters, id, showConfetti, text,
                                      correctOrIncorrect, allowClick}) {
    let {setSelectedI, setSelected, setAllowClick} = setters
    let handleClick = () => {
        console.log('clicked option')
        setSelectedI(id)
        setSelected(true)
        setAllowClick(false)
        // next()

    }
    return (
        <button className={correctOrIncorrect ? 'correct' : correctOrIncorrect !== null ? 'incorrect' : ''}
                onClick={handleClick} disabled={!allowClick}>{<Confetti
            active={showConfetti}/>}{text}</button>
    )
}
