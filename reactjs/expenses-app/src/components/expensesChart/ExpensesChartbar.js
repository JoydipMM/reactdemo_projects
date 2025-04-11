import React from "react";
import './ExpensesChartbar.css';

export default function ExpensesChartbar (props) {

    let barfillHeight = '0%';

    if(props.maxvalue > 0){
        barfillHeight = Math.round((props.value / props.maxvalue) * 100) + '%';
    }

    return(
        <div className="ExpensesChartBar_wrap">
            <div className="ExpensesChartBar"><span style={{height: barfillHeight}}></span></div>
            <div className="ExpensesChartBar_label">Label {props.label}</div>
        </div>
    );
}