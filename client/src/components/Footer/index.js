import React, { Component } from "react";
import styles from "./index.css";

const footerStyle = {
    fontSize: "20px",
    color: "white",
    margin: "20px",
    textAlign: "center",
};

const ptag = {
    textAlign: "center",
    color: "white",
};

class Footer extends Component {
    //Define State

    //Handle functions

    render() {
        return (
            <div className='row' style={{marginTop: "25px", backgroundColor:"white"}}>
                <div className='col-md-12 col-sm-12 gradient-bg'>
                    <h1 style={footerStyle}>Made with ❤️️ in Minnesota</h1>
                    <p style={ptag}>
                        By Lierin Hanuman, James Jorissen, Isabell Danell,Anusha
                        Dhamera and Jorge Calderon,
                    </p>
                </div>
            </div>
        );
    }
}

export default Footer;
