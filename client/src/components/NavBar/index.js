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
            <nav class="navbar navbar-expand-lg" style={stylesNav}>
            <h3 style={styles}>Mindset | Mental Health Matters. </h3>
             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
             </button>
               <div class="collapse navbar-collapse" id="navbarResponsive">
                 <ul class="navbar-nav ml-auto">
                   <li class="nav-item active">
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