import ExpenseDate from './ExpenseDate.js';
import './ExpenseItem.css';

const ExpenseItem = ({ props: { title, date, amount } }) => {
  return (
    <div className='expense-container'>
      <div className='expense-item-description'>
        <ExpenseDate date={date} />
        <h2 className='expense-item-title'>{title}</h2>
      </div>
      <div className='expense-item-price'>{amount}$</div>
    </div>
  );
};

export default ExpenseItem;
