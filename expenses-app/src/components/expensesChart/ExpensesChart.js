import React from "react";
import './ExpensesChart.css';

import ExpensesChartbar from './ExpensesChartbar';

export default function ExpensesChart(props) {
    const datapointValues = props.datapoints.map((datapoint)=> [datapoint.value]);
    const totalMaxValue = Math.max(...datapointValues);
    console.log(datapointValues)

    return (
        <>
            <div className="ExpensesChart_wrap_title">Report for the Year 2020</div>
            <div className="ExpensesChart_wrap">
                {props.datapoints.map((datapoint) => (<ExpensesChartbar key={datapoint.label} value={datapoint.value} maxvalue={totalMaxValue} label={datapoint.label} />))}
            </div>
        </>
    );
}