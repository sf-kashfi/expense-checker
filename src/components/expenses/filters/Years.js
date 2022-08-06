

import ExpenseFilterYear from './expenseFilterYear/ExpenseFilterYear';



function Years(props) {

    const yearHandler = (selectedYear) => {

        var filteredYearExpenses = props.expenses.filter((expense) => {
            return expense.date.getFullYear().toString() === selectedYear;
        });

        props.yearFiltering(filteredYearExpenses);

    };

    return (
        <ExpenseFilterYear filtered={yearHandler} ></ExpenseFilterYear>
    );
}

export default Years;