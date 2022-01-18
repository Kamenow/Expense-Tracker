import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseDate);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense-controls'>
        <div className='new-expense-input-wrapper'>
          <div className='new-expense-control'>
            <label>Title</label>
            <input
              type='text'
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className='new-expense-control new-expense-date'>
            <label>Date</label>
            <input
              type='date'
              min='2019-01-01'
              max='2022-12-31'
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div>
          <div className='new-expense-control'>
            <label>Amount</label>
            <input
              type='number'
              min='0.01'
              step='0.01'
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
        </div>
      </div>
      <div className='new-expense-actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

// const [userInput, setUserInput] = useState({
//   title: '',
//   amount: '',
//   date: '',
// });

// const onChangeHandler = (e) => {
//   switch (e.target.type) {
//     case 'text':
//       setUserInput((prevState) => {
//         return {
//           ...prevState,
//           title: e.target.value,
//         };
//       });
//       break;
//     case 'number':
//       setUserInput((prevState) => {
//         return {
//           ...prevState,
//           amount: e.target.value,
//         };
//       });
//       break;
//     case 'date':
//       setUserInput((prevState) => {
//         return {
//           ...prevState,
//           date: e.target.value,
//         };
//       });
//       break;
//     default:
//       break;
//   }
// };
