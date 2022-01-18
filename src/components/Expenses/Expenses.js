import React from 'react';

import ExpensesList from './ExpensesList.js';
import './Expenses.css';

const Expenses = ({ props: expenses }) => {
  return (
    <div className='expenses'>
      <ExpensesList items={expenses} />
    </div>
  );
};

export default Expenses;
