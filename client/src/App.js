import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
// import Signup from "./components/SignUpForm";
import Tests from "./components/Tests";

function App() {
    return (
        <Router>
            <div style={{backgroundColor:"white"}}>
                <NavBar />
                <Route exact path="/" component={HomePage} />
                <Route exact path="/tests" component={Tests} />
                <Route exact path="/dashboard" component={Dashboard} />
            </div>
        </Router>
    );
}

export default App;