import React, { useState, useEffect} from "react";
import Footer from "../Footer";
import GoogleChart from "../GoogleChart";

function Dashboard() {

  const [user, setUser] = useState({});

  useEffect(()=>{
    const userFormatted = JSON.parse(localStorage.getItem("user"));
    setUser(userFormatted);
  },[]);
  
  return (
    <div className="container">
        <div className="row">
          <div className="col">
          <h3>{user.userName}'s Dashboard</h3>
          </div>
        </div>  
        <div className="row">
          <div className="col">
          <p>Here are your daily mood tracker statistics</p>
          {/** Here we got to send the data and setings as props*/}
          <GoogleChart />
          </div>
        </div>  
        <div style={{marginTop:"20px"}}>
        </div>  
  </div>
  );
}

export default Dashboard;