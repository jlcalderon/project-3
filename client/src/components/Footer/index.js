import React, { Component } from "react";

const footerStyle = {
fontSize: "20px",
color: "#0a928e",
margin: "20px",
textAlign: "center",
};

const ptag = {
    textAlign: "center",
};

class Footer extends Component {
    //Define State

    //Handle functions

    render() {
        return (
            <div>
            <h1 style={footerStyle}>
        Made with ❤️️ in Minnesota 
    </h1>
    <p style={ptag}> 
    By Jorge Calderon, Lierin Hanuman, James Jorissen,  Isabell Danell and Anusha Dhamera
    </p>
    </div>
        );
    }
}

export default Footer;