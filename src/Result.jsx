export default function Result(props){


    return (
        <div className={'Result'}>
            <p>Score: {props.scoreBoard.reduce((acc, {correct, selected})=>correct === selected ? acc+1:acc, 0)}</p>
            <table style={{'width': '100%'}}>
                {props.scoreBoard.map(({question, correct, selected})=>(<tr>
                    <td>{question}</td>
                    <td>{correct}</td>
                    <td className={correct === selected ? '':'incorrect'}>{selected}</td>
                </tr>))}

            </table>
        </div>
    )
}