import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value )
    const totalMaximum = Math.max(...dataPointValues);

    console.log("chart, props")
     dataPointValues = props.dataPoints.map(dataPoint => )
    const totalMax = Mart.max();
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;
