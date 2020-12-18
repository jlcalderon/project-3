import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

function GoogleChart() {
  
  //Faking data to test  
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get("/api/dailystat/student/"+1)
    .then((result)=>{
       const formattedData = result.data.map((item) => {
         return [ new Date(item.dateofSurvey) , item.mood ];
       });
       setData([["Date", "Mood"], ...formattedData]);
    })
    .catch((err)=>{
      console.log(err);
    });
  },[]);
 
  console.log(data);

    return (
      <Chart
        width={'600px'}
        height={'400px'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          hAxis: {
            title: 'Days',
          },
          vAxis: {
            title: 'Mood',
          },
          series: {
            1: { curveType: 'function' },
          },
        }}
        rootProps={{ 'data-testid': '2' }}
    />
    );
}

export default GoogleChart;