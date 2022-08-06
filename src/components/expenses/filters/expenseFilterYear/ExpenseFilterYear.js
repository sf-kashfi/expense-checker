import React, { useState } from 'react';
import './ExpenseFilterYear.css';
import ExpenseYear from './ExpenseYear';

function ExpenseFilterYear(props) {
    const years = [{ id: 'y0', year: '2019' }, { id: 'y1', year: '2020' }, { id: 'y2', year: '2021' }, { id: 'y3', year: '2022' }]
    const [selectedYear, setSelectedYear] = useState('2022');
    const selectedYearHandler = (clickedYear) => {
        setSelectedYear(clickedYear);
        props.filtered(clickedYear);
    };
    return (
        <ul className='ExpenseFilterYear'>
            {years.map((year) => <ExpenseYear key={year.id} selected={selectedYear} singleYear={year.year} onSelectedYear={selectedYearHandler} />)}
        </ul>
    );
}

export default ExpenseFilterYear;