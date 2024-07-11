import React from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import CardHolders from "./CardHolders";

const NewExpense = (props) => {

    const getSavedExpenseData = (getEnteredExpanseData)=>{
        const getExpenseData = {
            ...getEnteredExpanseData,
            id: Math.random().toString()
        };
        console.log(getExpenseData);
        props.onsendDataToParent(getExpenseData);
    }




    return <CardHolders className="formbox">
        <h3>Add New Expenses</h3>
        <ExpenseForm onSaveExpanseData={getSavedExpenseData} />
        </CardHolders>
}

export default NewExpense;