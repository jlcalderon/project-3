import React, { Component } from "react";

    //CSS Styling for this component
    const styles = {
        color: "white",
        fontSize: "20px",
    }

    const stylesNav = {
        backgroundColor:"#0a928e"
    }

    const navLink = {
        color: "white",
        fontSize:" 20px"
        }
        

class NavBar extends Component {
    //Define State

    //Handle functions

    render() {
        return (
            <nav className="navbar navbar-expand-lg" style={stylesNav}>
            <h3 style={styles}>MINDSET | Mental Health Matters. </h3>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
             </button>
               <div className="collapse navbar-collapse" id="navbarResponsive">
                 <ul className="navbar-nav ml-auto">
                   <li className="nav-item active">
                     <a class="nav-link" href="homepage.html" style={navLink}>Home
                           <span class="sr-only">(current)</span>
                         </a>
                   </li>
                 </ul>
               </div>
           </nav>
        );
    }
}

export default NavBar;