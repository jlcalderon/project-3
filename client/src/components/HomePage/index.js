import React, {Component} from "react";
import NavBar from "../NavBar";
import Footer from "../Footer"
/* import Chart from "../Chart" */
import LoginForm from "../LoginForm";
import axios from "axios";


//Instance the object
class HomePage extends Component {
    //Define state

    //HandleFunctions

    //Render
    render(){
        return (
            <div className="container-fluid" style={{backgroundColor:"white"}}>
                <NavBar />
                <LoginForm />
                <Footer />
            </div>
        );
    }
}

export default HomePage;