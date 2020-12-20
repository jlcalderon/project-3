import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Tests from "./components/Tests";
import DailyMoodSurvey from './components/DailyMoodSurvey';
import Dashboard from './components/Dashboard';
import TranquilityAudioPlayer from './components/TranquilityAudioPlayer';
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
                <div>
                <NavBar />
                <Route exact path="/" component={HomePage} />
                <Route exact path="/tests" component={Tests} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/dailymoodsurvey" component={DailyMoodSurvey} />
                <Route exact path="/tranquility" component={TranquilityAudioPlayer} />
                <Footer/>
            </div>
        </Router>
    );
}

export default App;