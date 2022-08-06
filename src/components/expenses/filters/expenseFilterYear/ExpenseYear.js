import './ExpenseYear.css';

function ExpenseYear(props) {
    const clickHandler = () => {
        props.onSelectedYear(props.singleYear);
    };

    var s;
    if (props.selected === props.singleYear) {
        s = true;
    }
    else {
        s = false;
    }

    return (
        <li className='ExpenseYear' onClick={clickHandler} style={{ 'backgroundColor': s ? '#EAAC8B' : '#6D597A' }} >
            <h2>{props.singleYear}</h2>
        </li>
    );
}

export default ExpenseYear;