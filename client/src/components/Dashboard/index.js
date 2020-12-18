import React from "react";
import Footer from "../Footer";
import Chart from "../Chart";

function Dashboard(props) {
  console.log(props);
  return (
    <div className="container">
        <div className="row">
          <div className="col">
          <h3>Hello {}</h3>
          </div>
        </div>  
        <div className="row">
          <div className="col">
          <p>Here are your daily mood tracker statistics</p>
          {/** Here we got to send the data and setings as props*/}
          <Chart />
          </div>
        </div>  
        <div style={{marginTop:"20px"}}>
        <Footer />
        </div>  
  </div>
  );
}

export default Dashboard;