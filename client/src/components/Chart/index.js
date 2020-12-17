import React from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

function googleChart() {

  //Faking data to test
  let res = axios.get("/api/dailystat/student/"+1)
    .then((result)=>{
      return result;
    });
  

  console.log(res);

    return (
      <Chart
        width={'600px'}
        height={'400px'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['x', 'dogs', 'cats'],
          [0, 0, 0],
          [1, 10, 5],
          [2, 23, 15],
          [3, 17, 9],
        ]}
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

export default googleChart;