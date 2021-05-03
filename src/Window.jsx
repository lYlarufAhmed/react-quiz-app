import Option from "./Option";
// import {useState} from "react";

export default function Window(props) {
    // function run(){
    //     let intHandler = setTimeout(()=>{
    //         props.setProgress(props.progress > 4 ? props.progress-4:0)
    //         if (props.progress < 4) clearTimeout(intHandler)
    //         run()
    //     },1000)
    // }
    //
    // run()
    // while(progress > 0){
    //     setTimeout(()=>{
    //         setProgress(progress-2)
    //
    //     }, 300)
    // }
    // setInterval(()=>{
    //     setProgress(progress-2)
    // }, 1000)
    return (
        <div className={'Window'}>
            <div className="score">Score: <span id={'score'}>{props.score}</span></div>
            <h3 className="question">{props.question}</h3>
            <div className="options">
                {props.options.map((op, i) => (<Option text={op} key={i} id={i} clickHandler={props.optionLocker}
                                                       correctIndex={props.correctOptionIndex}
                                                       selected={props.selected} selectedI={props.selectedI}/>))}
            </div>
            {/*<div className={'progress'} style={{'width': props.progress+'%'}}></div>*/}
        </div>
    )
}