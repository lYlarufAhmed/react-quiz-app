import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import questions from './questions'
import NewOption from "./NewOption";
// eslint-disable-next-line import/no-anonymous-default-export
export default function ({score, results, setScoreBoard}) {
    let [qIndex, setQIndex] = useState(0)
    let [selected, setSelected] = useState(false)
    let [selectedI, setSelectedI] = useState(-1)
    let [allowClick, setAllowClick] = useState(true)
    let [progress, setProgress] = useState(100)
    const history = useHistory();

    // console.log(qIndex)
    // if (qIndex === questions.length) history.push('/result')
    let {question, options, correct} = questions[qIndex]

    let next = () => {
        setScoreBoard(prev => {
            let prevBoard = Object.assign({}, prev)
            if (selected && selectedI === correct) prevBoard.score++
            prevBoard.results.push([question, options[correct], selectedI > -1 ? options[selectedI] : 'time out!'])
            return prevBoard
        })
        setTimeout(() => {
            if (qIndex < questions.length-1){
            setSelected(false)
            setProgress(100)
            setQIndex(qIndex+1)
            setAllowClick(true)
            }
            else{
                history.push('/result')
            }

        }, 2000)

    }

    useEffect(() => {
        // console.log('executing returned effect')
        const timerId = setInterval(() => {
            if (progress < 2 || !allowClick) {
                // console.log('doing cleaning up in inside the clousure')
                clearInterval(timerId)
                next()
            } else setProgress(prev=>prev-5)
        }, 1000)
        return () => {
            // console.log('clearing up before rerender')
            return clearInterval(timerId)
        }
        // eslint-disable-next-line
    }, [
        // qIndex,
        allowClick])


    return (
        <div className={'Quiz'}>
            <div className={'Window'}>
                <div className="score">Score: <span id={'score'}>{score}</span></div>
                <h3 className="question">{question}</h3>
                <div className="options">
                    {options.map((op, i) => (<NewOption text={op} key={i}
                                                        id={i}
                                                        correctOrIncorrect={
                                                            selected && i === correct ? true : selected && i === selectedI ? false : null
                                                        }
                                                        showConfetti={selected && i === correct && i === selectedI}
                                                        setSelectedI={setSelectedI}
                                                        setters={{setSelectedI, setSelected, setAllowClick}}
                                                        allowClick={allowClick}

                    />))}
                </div>
                <div className={'progress'} style={{'width': progress + '%'}}/>
            </div>
        </div>
    )
}