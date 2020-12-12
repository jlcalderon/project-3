import React, {Component} from "react";
import NavBar from "../NavBar";
import Footer from "../Footer"
import Chart from "../Chart"
/* import LoginForm from "../LoginForm";
import Footer from "../Footer"; */

//Instance the object
class HomePage extends Component {
    //Define state

    //HandleFunctions

    //Render
    render(){
        return (
            <div>
                <NavBar />
                <Chart />
                <Footer />
            </div>
        );
    }
}

export default HomePage;