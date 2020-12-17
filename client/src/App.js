import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Tests from "./components/Tests";
import DailyMoodSurvey from './components/DailyMoodSurvey';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <Router>
            <div style={{backgroundColor:"white"}}>
                <NavBar />
                <Route exact path="/" component={HomePage} />
                <Route exact path="/tests" component={Tests} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/dailymoodsuervey" component={DailyMoodSurvey} />
            </div>
        </Router>
    );
}

export default App;