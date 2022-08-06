import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from '@trendyol-js/react-carousel';

import './ExpenseChart.css';

function Item(props) {

    return (
        <h1>salam{props.num}</h1>
    );
}

export default Item;