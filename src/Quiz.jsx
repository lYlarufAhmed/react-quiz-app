import React, {useState} from "react";
import Window from "./Window";
import {useHistory} from "react-router-dom";
import questions from './questions'


export default function Quiz(props) {
    let [qIndex, setQIndex] = useState(0)
    let [score, setScore] = useState(0)
    let [selected, setSelected] = useState(false)
    let [selectedI, setSelectedI] = useState(-1)
    const history = useHistory();
    let [progress, setProgress] = useState(100)

    let question = questions[qIndex]
    let lockOptions = (answerIndex, optionIndex) => {
        if (!selected) {
            setSelectedI(optionIndex)
            let sb = props.scoreBoard
            sb.push({
                'question': question.question,
                'correct': question.options[question.correct],
                'selected': question.options[optionIndex]
            })
            props.scoreBoardSetter(sb)
            if (answerIndex === optionIndex && !selected) {
                setScore(score + 1)
            }
            setSelected(true)
            setTimeout(() => {
                setSelected(false)
                if (questions.length - 1 !== qIndex) {
                    setQIndex(qIndex + 1)
                    setSelectedI(-1)
                } else {
                    history.push('/result');
                }
            }, 2000)
        }
    }
    return (
        <div className={'Quiz'}>
            <Window question={question.question} options={question.options} correctOptionIndex={question.correct}
                    optionLocker={lockOptions} score={score} selected={selected} selectedI={selectedI}
                    setProgress={setProgress} progress={progress}/>
        </div>
    )
}