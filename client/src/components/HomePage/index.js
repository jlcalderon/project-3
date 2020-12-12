import React, { Component } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
/* import Chart from "../Chart" */
import LoginForm from "../LoginForm";
import axios from "axios";

//Instance the object
class HomePage extends Component {
    //Define state
    state = {
        username: "",
        password: "",
    };

    componentDidMount() {}

    //HandleFunctions


    //Grabing changes in the inputs fields
    //Getting the actual value typed by the user into this input
            handleInputChange = (event) => {
                const name = event.target.name;
                const value = event.target.value;
        
                /* Updating this input component state */
                this.setState({
                    [name]: value,
                });
            };

    //Submit the form to axios API post request
    handleLoginFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.username +" "+ this.state.password);

        

        axios
            .post("/api/login", {
                userName: this.state.username,
                password: this.state.password,
            })
            .then((result) => {
                 alert(`User: ${JSON.stringify(result.data)} authenticated`);
                 this.setState({
            username: "",
            password: "",
            //CHANGE URL
            //REACT ROUTER HISTORY
            });
        })
            .catch((err) => {
                throw err;
            });
    };

    //Render
    render() {
        return (
            <div
                className='container-fluid'
                style={{ backgroundColor: "white" }}>
                <NavBar />
                <LoginForm
                    username={this.state.username}
                    password={this.state.password}
                    handleLoginFormSubmit={this.handleLoginFormSubmit}
                    handleInputChange={this.handleInputChange}
                 />
                <Footer />
            </div>
        );
    }
}

export default HomePage;
