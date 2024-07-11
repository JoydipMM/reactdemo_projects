import "./styles.css";
import React, { useState } from "react";
import CardHolders from "./components/CardHolders";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from './components/NewExpense';
import ExpensesFilter from "./components/ExpensesFilter";

import ExpensesFullChart from './components/expensesChart/ExpensesFullChart';


const staticexpenses = [
  { id:1, date: new Date(2021, 1, 8), title: "Expenses 01", price: "270" },
  { id:2, date: new Date(2021, 2, 22), title: "Expenses 02", price: "150" },
  { id:3, date: new Date(2021, 3, 15), title: "Expenses 03", price: "250" },
  { id:22, date: new Date(2022, 10, 15), title: "Expenses 04", price: "2250" },
  { id:21, date: new Date(2022, 12, 15), title: "Expenses 05", price: "2250" },
];

export default function App() {
  

  const [ExpenseList, setExpenseList] = useState(staticexpenses);

  const getExpenseDataFromChild = (getExpenseData) => {
    console.log(getExpenseData);
    setExpenseList((prevExpenses) => {
      return [getExpenseData, ...prevExpenses];
    });
  }

  const [filterYear, setFilterYear] = useState('');

  const getFilterYear = (selectedYear) => {
    setFilterYear(selectedYear);
    console.log('in App JS', selectedYear);
  }

  const FilteredExpenseList = ExpenseList.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear; 
  })


  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {/* <h2>Start editing to see some magic happen!</h2> */}
      <NewExpense onsendDataToParent={getExpenseDataFromChild} />
      <ExpensesFilter selected={filterYear} selectYearToParent={getFilterYear} />

      {filterYear === '' && <ExpensesFullChart expensesData={ExpenseList} /> }
      {filterYear !== '' || FilteredExpenseList.length !== 0 ? <ExpensesFullChart expensesData={FilteredExpenseList} /> : '' }

      <CardHolders className="all_expanses_card_wrap">

        {/* <ExpenseItem data={staticexpenses[0]} />
        <ExpenseItem data={staticexpenses[1]} />
        <ExpenseItem data={staticexpenses[2]} /> */}

        {/* without filter function */}
        {/* {ExpenseList.map((item) => <ExpenseItem data={item} key={item.id} />)} */}


        {/* with filter function */}
        {filterYear === '' && ExpenseList.map((item) => <ExpenseItem data={item} key={item.id} />)}
        {FilteredExpenseList.length === 0 ? `No Data Found for the year of ${filterYear}` : FilteredExpenseList.map((item) => <ExpenseItem data={item} key={item.id} />)}
        
        

      </CardHolders>
    </div>
  );
}
