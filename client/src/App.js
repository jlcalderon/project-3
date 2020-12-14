import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <Router>
            <div style={{backgroundColor:"white"}}>
                <NavBar />
                <Route path="/" component={HomePage} />
                <Route path="/dashboard" component={Dashboard} />
            </div>
        </Router>
    );
}

export default App;