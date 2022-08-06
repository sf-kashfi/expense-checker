
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import Item from './Item';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './ExpenseChart.css';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 22, 44, 55, 66, 77];

function ExpenseChart(props) {
    return (
        <OwlCarousel items={5} className='owl-theme'>
            {arr.map((ctgy) => <Item num={ctgy} />)}
        </OwlCarousel>
    );
}

export default ExpenseChart;