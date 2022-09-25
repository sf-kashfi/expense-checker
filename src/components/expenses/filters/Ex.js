import React from 'react';



function Categories(props) {



    const categoryFilteringHandler = (category, isActive) => {

    }

    return (
        <OwlCarousel dots={false} autoWidth={true} margin={20} items={5} className='Categories' categoryFiltering={categoryFilteringHandler}>
            <ExpenseFilterCtgy></ExpenseFilterCtgy>
        </OwlCarousel>
    );
}

export default Categories;