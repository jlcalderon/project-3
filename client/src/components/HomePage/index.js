import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../Footer";
import LoginForm from "../LoginForm";
import axios from "axios";

function HomePage() {
    //Define state 
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    let history = useHistory();

    //HandleFunctions
    //Submit the form to axios API post request
     const handleLoginFormSubmit = (event) => {
        event.preventDefault();
        console.log(username +" "+ password);

        axios
            .post("/api/login", {
                userName: username,
                password: password,
            })
            .then((result) => {
            /* alert(`User: ${JSON.stringify(result.data)} authenticated`); */
            //CHANGE STATE    
            //CHANGE URL
            //REACT ROUTER HISTORY  
            history.push("/dashboard");
        }).catch((err) => {
                throw err;
            });
    }; 

    //Render
        return (
            <div
                className='container-fluid'
                style={{ backgroundColor: "white" }}>
                <LoginForm
                    username={username}
                    password={password}
                    handleLoginFormSubmit={handleLoginFormSubmit}
                    handleInputChangeUsername={(event)=>{setUsername(event.target.value)}}
                    handleInputChangePassword={(event)=>{setPassword(event.target.value)}}
                 />
                <Footer />
            </div>
        );
}

export default HomePage;
