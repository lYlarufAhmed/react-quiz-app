export default function Result({score, results}){


    console.log('result props created')
    return (
        <div className={'Result'}>
            <p>Score: {score}</p>
            <table style={{'width': '100%'}}>
                {results.map((res, i)=>(<tr key={i}>
                    <td>{res[0]}</td>
                    <td>{res[1]}</td>
                    <td className={res[1] === res[2] ? '':'incorrect'}>{res[2]}</td>
                </tr>))}

            </table>
        </div>
    )
}