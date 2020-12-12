import React, {Component} from "react";
import NavBar from "../NavBar";
import LoginForm from "../LoginForm";
/* import Footer from "../Footer"; */

//Instance the object
class HomePage extends Component {
    //Define state

    //HandleFunctions

    //Render
    render(){
        return (
            <div className="container-fluid">
                <NavBar />
                <LoginForm />
            </div>
        );
    }
}

export default HomePage;