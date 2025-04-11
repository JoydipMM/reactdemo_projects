import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props)=> {

    // single individual state
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [isTitleValid, setIsTitleValid] = useState(true);
    const [isPriceValid, setIsPriceValid] = useState(true);
    const [isDateValid, setIsDateValid] = useState(true);

    // multiple state with define object
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleEvent = (event)=>{
        //console.log(event.target.value);

        if(event.target.value.trim().length > 0){
            setIsTitleValid(true);
        }

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

        if(event.target.value.trim().length > 0){
            setIsPriceValid(true);
        }

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

        if(event.target.value.trim().length > 0){
            setIsDateValid(true);
        }

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

        if(enteredTitle.trim().length === 0 || enteredAmount.trim().length === 0 || enteredDate.trim().length === 0){
            setIsTitleValid(false);
            setIsPriceValid(false);
            setIsDateValid(false);
            return;
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
                <input type="text" className={`form_field ${ !isTitleValid ? 'error' : '' }`} value={enteredTitle} onChange={titleEvent} />
                {/* <input type="text" className="form_field" onChange={(event) => inputChangeEvent('expenseTitle', event.target.value)} /> */}
            </div>

            <div className="form_field_row">
                <label className="form_field_label">Amount</label>
                <input type="number" className={`form_field ${ !isPriceValid ? 'error' : '' }`} min="0.01" step="0.01" value={enteredAmount} onChange={amountEvent} />
                {/* <input type="number" className="form_field" min="0.01" step="0.01" onChange={(event) => inputChangeEvent('expenseAmount', event.target.value)} /> */}
            </div>

            <div className="form_field_row">
                <label className="form_field_label">Date</label>
                <input type="date" className={`form_field ${ !isDateValid ? 'error' : '' }`} min="2022-01-01" max="2024-12-31" value={enteredDate} onChange={dateEvent} />
                {/* <input type="date" className="form_field" min="2022-01-01" max="2024-12-31" onChange={(event) => inputChangeEvent('expenseDate', event.target.value)} /> */}
            </div>

        </div>
        <button className="expense_button">ADD</button>

        </form>
    </div>
    )
}

export default ExpenseForm;