import Card from '../../UI/Card';
import './Expense.css';

function Expense(props) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return (
        <Card className='Expense'>
            <div className='Expense_left'>
                <div className='Expense_icons'>
                    <span className='Expense_icon'>{props.ctgyIcon}</span>
                </div>
                <div className='Expense_texts'>
                    <p className='Expense_date'>{props.date.getDate()} {monthNames[props.date.getMonth()]}</p>
                    <h2 className='Expense_title'>{props.title}</h2>
                    <p className='Expense_ctgy'>{props.ctgyName}</p>
                </div>
            </div>
            <div className='Expense_right'>
                <h2>${props.amount}</h2>
            </div>
        </Card>
    );
}

export default Expense;