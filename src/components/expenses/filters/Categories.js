import React, { useState } from 'react';
import ExpenseFilterCtgy from './expenseFilterCtgy/ExpenseFilterCtgy';


function Categories(props) {

    var activeCtgy = 0;
    var sumOfExpenses = [];
    var filnalExpenses = [];

    const [expensesArray, setExpensesArray] = useState({
        activeCtgy1: 0,
        sumOfExpenses1: [],
        filnalExpenses1: [],
    });

    const [expense, setExpense] = useState(props.expenses);
    if (props.expenses !== expense) {
        setExpensesArray({
            activeCtgy1: 0,
            sumOfExpenses1: [],
            filnalExpenses1: [],
        });
        setExpense(props.expenses);
    }

    const ctgyHandler = (category, isActive) => {
        const filteredCtgyExpense = props.expenses.filter((expense) => {
            return expense.ctgy === props.categories.findIndex(object => {
                return object.categoryName === category
            });
        });

        if (isActive) {
            activeCtgy = expensesArray.activeCtgy1 + 1;
            sumOfExpenses = [...new Set([...expensesArray.sumOfExpenses1, ...filteredCtgyExpense])];
            filnalExpenses = sumOfExpenses;
        }
        else {
            activeCtgy = expensesArray.activeCtgy1 - 1;
            sumOfExpenses = expensesArray.sumOfExpenses1.filter(x => !filteredCtgyExpense.includes(x));
            filnalExpenses = sumOfExpenses;

            if (activeCtgy === 0) {
                filnalExpenses = props.expenses;
                sumOfExpenses = [];
            }
        }

        console.log(activeCtgy);
        console.log(sumOfExpenses);
        console.log(filnalExpenses);

        props.ctgyFiltering(filnalExpenses);
        setExpensesArray({
            activeCtgy1: activeCtgy,
            sumOfExpenses1: sumOfExpenses,
            filnalExpenses1: filnalExpenses,
        });
    }

    return (
        <ExpenseFilterCtgy expenses={props.expenses} categories={props.categories} filtered={ctgyHandler}></ExpenseFilterCtgy>
    );
}

export default Categories;