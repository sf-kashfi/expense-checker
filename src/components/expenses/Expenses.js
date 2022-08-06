import React, { useState } from 'react';
import './Expenses.css';
import ExpenseList from './expenseList/ExpenseList';
import Card from '../UI/Card';
import Filters from './filters/Filters'
import ExpenseChart from './expenseChart/ExpenseChart';




function Expenses(props) {

    const filtered2022All = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === '2022';
    });

    const [expenses, setExpenses] = useState(filtered2022All);

    const changedExpensesHandler = (newExpenses) => {
        setExpenses(newExpenses);
    }

    return (
        <Card className='Expenses'>
            <Filters expenses={props.expenses} firstState={filtered2022All} categories={props.categories} changedExpenses={changedExpensesHandler}></Filters>
            <ExpenseChart expenses={expenses}></ExpenseChart>
            <ExpenseList expenses={expenses} categories={props.categories}></ExpenseList>
        </Card>
    );
}

export default Expenses;