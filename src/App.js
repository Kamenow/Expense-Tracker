import Expenses from './components/Expenses/Expenses.js';
import './App.css';
import NewExpense from './components/NewExpense.js/NewExpense.js';
import { useState } from 'react';

const DUMMY_EXPENSES = [
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
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className='container'>
      <NewExpense onExpenseHandler={addExpenseHandler} />
      <Expenses props={expenses} />
    </div>
  );
}

export default App;
