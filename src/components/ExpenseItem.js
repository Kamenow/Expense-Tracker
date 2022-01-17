import './ExpenseItem.css';

const ExpenseItem = ({ props: { title, date, amount } }) => {
  return (
    <div className='expense-container'>
      <div className='expense-item-description'>
        <h2 className='expense-item-title'>{title}</h2>
        <div className='expense-item-date'>{`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}</div>
      </div>
      <div className='expense-item-price'>{amount}</div>
    </div>
  );
};

export default ExpenseItem;
