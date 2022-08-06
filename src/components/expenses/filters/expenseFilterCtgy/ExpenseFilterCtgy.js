import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './ExpenseFilterCtgy.css';
import ExpenseCtgy from './ExpenseCtgy';

function ExpenseFilterCtgy(props) {


    const selectedCtgyHandler = (clickedCtgy, isCtgy) => {
        props.filtered(clickedCtgy, isCtgy);
    };

    return (
        <OwlCarousel dots={false} autoWidth={true} margin={20} items={5} className='ExpenseFilterCtgy'>
            {props.categories.map((ctgy) => <ExpenseCtgy key={ctgy.id} category={ctgy.categoryName} onSelectedCtgy={selectedCtgyHandler} expenses={props.expenses} />)}
        </OwlCarousel>
    );
}

export default ExpenseFilterCtgy;