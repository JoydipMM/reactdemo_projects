import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props)=> {

    // single individual state
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // multiple state with define object
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleEvent = (event)=>{
        //console.log(event.target.value);
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
        // setUserInput((prevState) => {
        //     return { ...prevState, setEnteredTitle: event.target.value }
        // });
    }
    const amountEvent = (event)=>{
        //console.log(event.target.value);
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });
        // setUserInput((prevState) => {
        //     return { ...prevState, setEnteredAmount: event.target.value }
        // });
    }
    const dateEvent = (event)=>{
        //console.log(event.target.value);
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
        // setUserInput((prevState) => {
        //     return { ...prevState, setEnteredDate: event.target.value }
        // });
    }

    // create common change handler
    // const inputChangeEvent = (identifier, value) => {
    //     if(identifier === 'expenseTitle'){
    //         setEnteredTitle(value);
    //     }else if(identifier === 'expenseAmount'){
    //         setEnteredAmount(value);
    //     }else if(identifier === 'expenseDate'){
    //         setEnteredDate(value);
    //     }
    // }


    const submitEvent = (event)=>{
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            price: enteredAmount,
            date: new Date(enteredDate),
        }

        console.log(expenseData);
        props.onSaveExpanseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }


    return(
    <div className="expanse_form">
        <form onSubmit={submitEvent}>
        <div className="form_field_row_group">

            <div className="form_field_row">
                <label className="form_field_label">Title</label>
                <input type="text" className="form_field" value={enteredTitle} onChange={titleEvent} />
                {/* <input type="text" className="form_field" onChange={(event) => inputChangeEvent('expenseTitle', event.target.value)} /> */}
            </div>

            <div className="form_field_row">
                <label className="form_field_label">Amount</label>
                <input type="number" className="form_field" min="0.01" step="0.01" value={enteredAmount} onChange={amountEvent} />
                {/* <input type="number" className="form_field" min="0.01" step="0.01" onChange={(event) => inputChangeEvent('expenseAmount', event.target.value)} /> */}
            </div>

            <div className="form_field_row">
                <label className="form_field_label">Date</label>
                <input type="date" className="form_field" min="2022-01-01" max="2024-12-31" value={enteredDate} onChange={dateEvent} />
                {/* <input type="date" className="form_field" min="2022-01-01" max="2024-12-31" onChange={(event) => inputChangeEvent('expenseDate', event.target.value)} /> */}
            </div>

        </div>
        <button className="expense_button">ADD</button>

        </form>
    </div>
    )
}

export default ExpenseForm;