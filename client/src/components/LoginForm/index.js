import React from "react";
import styles from "./index.css";

function LoginForm(props){
    return (
        <div className="row" style={{backgroundColor:"white", marginTop: "20px"}}>
            <div className="col-sm-12 offset-md-4 col-md-4 offset-md-4 gradient-bg" style={{padding:"25px"}}>
                <form style={{textAlign: "center"}}>
                     <div className="form-group">
                        <input 
                            type="email" 
                            /* className="email rounded-pill p-1 border" */ 
                            id="email-input" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter your email" 
                        />
                    </div>
                     <div className="form-group">
                       <input 
                            type="password"
                            /* className="password rounded-pill p-1 border" */ 
                            id="password-input" 
                            placeholder="Password, please!"
                        />
                       </div>
                       <div className="txtb">
                         <input 
                            type="submit" 
                            className="logbtn" 
                            value="Login"
                        />
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