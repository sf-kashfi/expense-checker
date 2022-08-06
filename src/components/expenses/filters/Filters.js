import React, { useState } from 'react';
import Categories from './Categories';
import Years from './Years';


function Filters(props) {




    const [filteredExpenses, setFilteredExpenses] = useState(props.firstState);


    const yearFilteringHandler = (filteredYearExpenses) => {
        setFilteredExpenses(filteredYearExpenses);
        props.changedExpenses(filteredYearExpenses);
    };

    const ctgyFilteringHandler = (filteredCtgyExpenses) => {
        props.changedExpenses(filteredCtgyExpenses);
    }

    return (
        <div>
            <Years expenses={props.expenses} yearFiltering={yearFilteringHandler}></Years>
            <Categories expenses={filteredExpenses} categories={props.categories} ctgyFiltering={ctgyFilteringHandler}></Categories>
        </div>
    );
}

export default Filters;