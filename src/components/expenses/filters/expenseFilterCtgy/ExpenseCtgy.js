import React, { useState } from 'react';
import './ExpenseCtgy.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function ExpenseCtgy(props) {

    const [isActive, setIsActive] = useState(false);
    const [expense, setExpense] = useState(props.expenses);

    if (props.expenses !== expense) {
        setIsActive(false);
        setExpense(props.expenses);
    }


    const activateHandler = () => {
        props.onSelectedCtgy(props.category, !isActive);
        setIsActive(current => !current);

    };



    return (
        <li className='ExpenseCtgy item' onClick={activateHandler} style={{ 'backgroundColor': isActive ? '#6D597A' : '#EAAC8B' }} >
            <h4 className='ctgy'>{props.category}</h4>
        </li>
    );
}

export default ExpenseCtgy;