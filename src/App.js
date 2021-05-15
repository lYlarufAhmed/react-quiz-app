import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
// import Quiz from "./Quiz";
import Result from "./Result";
import NotFound from "./NotFound";
import {useState} from "react";
import NewQuiz from "./NewQuiz";

export default function App() {
    let [scoreBoard, setScoreBoard] = useState({
        score: 0, results: []
    })
    // let [scoreBoard, setScoreBoard] = useState([])
    return (
        <Router>
            <Switch>
                <Route exact path={'/'}>
                    {/*<Quiz scoreBoard={scoreBoard} scoreBoardSetter={setScoreBoard}/>*/}
                    <NewQuiz results={scoreBoard.results} score={scoreBoard.score} setScoreBoard={setScoreBoard}/>
                </Route>
                <Route exact path={'/test'}>
                    <NewQuiz results={scoreBoard.results} score={scoreBoard.score} setScoreBoard={setScoreBoard}/>
                </Route>
                <Route exact path={'/result'}>
                    <Result results={scoreBoard.results} score={scoreBoard.score}/>
                </Route>
                <Route path={'/404'}>
                    <NotFound/>
                </Route>
                <Route path={'/'}>
                    <Redirect to={'/404'}/>
                </Route>
            </Switch>
        </Router>
    )
}