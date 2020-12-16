import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
// import Signup from "./components/SignUpForm";
import PHQ9 from "./components/PHQ9"

function App() {
    return (
        <Router>
            <div style={{backgroundColor:"white"}}>
                <NavBar />
                <Route exact path="/" component={HomePage} />
                <Route exact path="/dashboard" component={Dashboard} />
                {/* <Route exact path="/signup" component={Signup} /> */}
                <Route exact path="/survey" component={PHQ9} />
            </div>
        </Router>
    );
}

export default App;