import React from "react";
/* import styles from "./index.css"; */

function LoginForm(props){
    console.log(props);
    return (
        <div className="row" style={{backgroundColor:"white", marginTop: "20px"}}>
            <div className="col-sm-12 offset-md-4 col-md-4 offset-md-4 gradient-bg" style={{padding:"25px"}}>
            <img src="./mindsetlogo.png" alt="Minset logo" height="130"/>
                <form onSubmit={props.handleLoginFormSubmit} style={{textAlign: "center"}}>
                     <div className="form-group">
                        <input 
                            type="text"
                            value={props.username}
                            onChange={props.handleInputChangeUsername}
                            name="username" 
                            /* className="email rounded-pill p-1 border" */ 
                            id="username" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter your user name" 
                        />
                    </div>
                     <div className="form-group">
                       <input 
                            type="password"
                            value={props.password}
                            onChange={props.handleInputChangePassword}
                            name="password"
                            /* className="password rounded-pill p-1 border" */ 
                            id="password" 
                            placeholder="Password, please!"
                        />
                       </div>
                       <div className="txtb">
                         <button 
                            type="submit"
                            className="logbtn"
                        >
                            Login
                        </button>
                      </div>
                      <div className="bottom-text" style={{color:"white"}}>
                        Don't have an account? <a href="register.html">Register</a>
                      </div>
                </form>
        </div>
        </div>
    );
}

export default LoginForm;