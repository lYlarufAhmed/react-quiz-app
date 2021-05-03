import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Quiz from "./Quiz";
import Result from "./Result";
import NotFound from "./NotFound";
import {useState} from "react";

export default function App(props) {
    let [scoreBoard, setScoreBoard] = useState([])
    return (
        <Router>
            <Switch>
                <Route exact path={'/'}>
                    <Quiz scoreBoard={scoreBoard} scoreBoardSetter={setScoreBoard}/>
                </Route>
                <Route exact path={'/result'}>
                    <Result scoreBoard={scoreBoard}/>
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