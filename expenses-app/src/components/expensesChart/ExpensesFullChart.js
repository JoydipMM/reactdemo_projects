import React from "react";
import './ExpensesFullChart.css';

import ExpensesChart from './ExpensesChart';

const ExpensesFullChart = (props) => {

    const chartDataPoints = [
        { label: 'Jan', value: '0' },
        { label: 'Feb', value: '0' },
        { label: 'Mar', value: '0' },
        { label: 'Apr', value: '0' },
        { label: 'May', value: '0' },
        { label: 'Jun', value: '0' },
        { label: 'Jul', value: '0' },
        { label: 'Aug', value: '0' },
        { label: 'Sep', value: '0' },
        { label: 'Oct', value: '0' },
        { label: 'Nov', value: '0' },
        { label: 'Dec', value: '0' },
    ]

    const getExpensesData = props.expensesData;
    //console.log(getExpensesData);

    for (const expense of props.expensesData){
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.price;
    }

    return(
        <div className="expenses_chart_fullsection">
            <ExpensesChart selectedYear={props.selected} expensesdata={getExpensesData} datapoints={chartDataPoints} />
        </div>
    );
}

export default ExpensesFullChart;