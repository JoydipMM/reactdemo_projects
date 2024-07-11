import React from "react";
import "./ExpenseDate.css";

const ExpanseDate = (props) => {
  return (
    <div className="expense_datebox">
      {/* {props.date.toISOString()} exp: 2021-03-27T18:30:00.000Z */}
      <div className="expense_date">
        {props.date.toLocaleString("en-US", { day: "2-digit" })}
      </div>
      <div className="expense_month">
        {props.date.toLocaleString("en-US", { month: "long" })}
      </div>
      <div className="expense_year">{props.date.getFullYear()}</div>
    </div>
  );
};

export default ExpanseDate;
