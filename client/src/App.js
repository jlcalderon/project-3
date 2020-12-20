import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Tests from "./components/Tests";
import DailyMoodSurvey from './components/DailyMoodSurvey';
import Dashboard from './components/Dashboard';
import Anxiety from './components/Tranquility_Anxiety'
import Attention from './components/Tranquility_Focus'
import Morning from './components/Tranquility_GoodMorning'
import LettingGo from './components/Tranquility_LettingGo'
import Restful from './components/Tranquility_RestfulSleep'
import Calm from './components/Tranquility_Calm'
import TranquilityAudioPlayer from './components/Tranquility_Home'
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <div style={{backgroundColor:"white"}}>
                <NavBar />
                <Route exact path="/" component={HomePage} />
                <Route exact path="/tests" component={Tests} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/dailymoodsurvey" component={DailyMoodSurvey} />
                <Route exact path="/tranquility_home" component={TranquilityAudioPlayer} />
                <Route exact path="/tranquility_anxiety" component={Anxiety} />
                <Route exact path="/tranquility_calm" component={Calm} />
                <Route exact path="/tranquility_restful" component={Restful} />
                <Route exact path="/tranquility_focus" component={Attention} />
                <Route exact path="/tranquility_morning" component={Morning} />
                <Route exact path="/tranquility_lettinggo" component={LettingGo} />
                <Footer/>
            </div>
        </Router>
    );
}

export default App;