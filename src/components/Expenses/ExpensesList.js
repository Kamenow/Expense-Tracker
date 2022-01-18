import React from 'react';

import ExpenseItem from './ExpenseItem.js';
import './ExpensesList.css';

const ExpensesList = (props) => {
  console.log(props);

  return (
    <div className='expenses-list'>
      {props.items.length == 0 ? (
        <p className='no-expenses-message'>No Expenses Found</p>
      ) : (
        props.items.map((expense, index) => {
          return <ExpenseItem props={expense} key={index} />;
        })
      )}
    </div>
  );
};

export default ExpensesList;
