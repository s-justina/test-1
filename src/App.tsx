import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HeroDetails from "./components/HeroDetails";
import Home from "./components/Home";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/heroes/:id">
                    <HeroDetails/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
