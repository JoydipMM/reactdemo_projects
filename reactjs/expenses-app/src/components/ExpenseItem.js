import React, { useState } from "react";
import CardHolders from "./CardHolders";
import ExpanseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  //const [title, setTitle] = useState(props.data.title);

  const buttonClick = () => {
    console.log("clicked!!!");
    // setTitle("Set Title");
  }

  return (
    <CardHolders className="expense_card">
      <ExpanseDate date={props.data.date} />
      <div className="expense_content">
        <h2 className="expense_title">{props.data.title}</h2>
        {/* <h2 className="expense_title">{title}</h2> */}
      </div>
      <div className="expense_action">
        <div className="expense_amount">${props.data.price}</div>
        <button className="expense_amount" onClick={buttonClick}>Click</button>
      </div>
    </CardHolders>
  );
};

export default ExpenseItem;
