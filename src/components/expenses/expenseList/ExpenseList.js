import './ExpenseList.css';
import Expense from './Expense';

function Expenses(props) {
    return (
        <div className='ExpenseList'>
            {props.expenses.map((expenseItem) => (
                <Expense
                    key={expenseItem.id}
                    title={expenseItem.title}
                    amount={expenseItem.amount}
                    date={expenseItem.date}
                    ctgyIcon={props.categories[expenseItem.ctgy].categoryIcon}
                    ctgyName={props.categories[expenseItem.ctgy].categoryName}
                />
            ))}
        </div>
    );
}

export default Expenses;