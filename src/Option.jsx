import Confetti from 'react-dom-confetti';

export default function Option(props) {
    let handleClick = () => {
        props.clickHandler(props.correctIndex, props.id)
    }
    return (
        <div
            className={`option ${props.selected && props.correctIndex === props.id ? 'correct' : props.selected && props.id === props.selectedI ? 'incorrect' : ''}`}>
            {props.id === props.correctIndex ? <Confetti active={props.selected && props.correctIndex === props.selectedI}/>:'' }
            <button onClick={handleClick}>{props.text}</button>
        </div>

    )
}