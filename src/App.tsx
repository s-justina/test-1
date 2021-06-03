import React, {useEffect, useState} from "react";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import Home from "./components/Home";
const history = createBrowserHistory();

function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/heroes/:id">
                    <h1>Hero details</h1>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
