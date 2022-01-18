import Expenses from './components/Expenses/Expenses.js';
import './App.css';
import NewExpense from './components/NewExpense.js/NewExpense.js';
import { useState } from 'react';

function App() {
  const [expenses, setExpenses] = useState([
    {
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      title: 'Gosho',
      amount: 523.23,
      date: new Date(2020, 5, 14),
    },
    {
      title: 'Kiro',
      amount: 728.54,
      date: new Date(2021, 8, 17),
    },
    {
      title: 'Tosho',
      amount: 348.74,
      date: new Date(2020, 9, 29),
    },
  ]);

  // const expenses = ;

  const addExpenseHandler = (expense) => {
    console.log(expense);
    console.log(expenses);
  };

  return (
    <div className='container'>
      <NewExpense onExpenseHandler={addExpenseHandler} />
      <Expenses props={expenses} />
    </div>
  );
}

export default App;
