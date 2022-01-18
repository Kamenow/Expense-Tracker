import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter.js';
import ExpensesList from './ExpensesList.js';
import ExpensesChart from './ExpensesChart.js';
import './Expenses.css';

const Expenses = ({ props: expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className='expenses'>
      <div>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
      </div>
      <ExpensesList items={filteredExpenses} />
    </div>
  );
};

export default Expenses;
