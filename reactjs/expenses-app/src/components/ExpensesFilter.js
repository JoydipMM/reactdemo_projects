import React from "react";
import "./ExpensesFilter.css"; 


const ExpensesFilter = (props) => {

    //const [filterYear, setFilterYear] = useState('');

    const changeYearEvent = (event)=>{
        //setFilterYear(event.target.value);
        props.selectYearToParent(event.target.value);
    }



    return(
        <div className="expense_filter_card">
            {props.selected === '' ? 'Select Year for Filter Data' : `Selected Year is: ${props.selected}`} 
            <select value={props.selected} onChange={changeYearEvent}>
                <option value=''>Select Year</option>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
                <option value='2024'>2024</option>
            </select>
        </div>
    );
}

export default ExpensesFilter;