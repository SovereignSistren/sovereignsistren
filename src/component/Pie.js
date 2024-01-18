/* App.js */
import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
// var CanvasJSReact = require('@canvasjs/react-charts');

// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Pie extends Component {
  render() {
    const options = {
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text: "",
      },
      data: [
        {
          type: "pie",
          startAngle: 75,
          toolTipContent: "<b>{label}</b>: {y}%",
          showInLegend: "true",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "{label} - {y}%",
          dataPoints: [
            { y: 21.3, label: "Low performance" },
            { y: 14.8, label: "Medium performance" },
            { y: 8.2, label: "High performance" },
            { y: 55.7, label: "Missing Data" },
          ],
        },
      ],
    };
    return (
      <div>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
export default Pie;
