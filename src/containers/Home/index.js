import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Employees from "../Employees/index"

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/Employee">
                    <Employees />
                </Route>
            </Switch>
        </Router>)
}

export default App;
