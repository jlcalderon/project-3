import React from "react";
import Footer from "../Footer";
import Chart from "../Chart";

function Dashboard(props) {
  console.log(props);
  return (
    <div className="container">
        <div className="row">
          <div className="offset-md-1 col-md-4">
          <h2>Hello {}</h2>
          </div>
        </div>  
        <div className="row">
          <div className="offset-md-2 col-md-4">
          <h5>Here are your daily mood tracker statistics</h5>
          <Chart />
          </div>
        </div>  
        <Footer />
  </div>
  );
}

export default Dashboard;