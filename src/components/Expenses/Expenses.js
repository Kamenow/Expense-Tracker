import ExpenseItem from './ExpenseItem.js';
import './Expenses.css';

const Expenses = ({ props: expenses }) => {
  console.log(expenses);

  return (
    <div className='expenses'>
      {expenses.map((expense, index) => {
        return <ExpenseItem props={expense} key={index} />;
      })}
    </div>
  );
};

export default Expenses;
