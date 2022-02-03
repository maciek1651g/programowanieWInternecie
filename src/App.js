import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PuzzlePage from "./PuzzlePage/PuzzlePage";

const App = () => {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <PuzzlePage />
                    </Route>
                </Switch>
            </Router>
        </Fragment>
    );
};

export default App;
