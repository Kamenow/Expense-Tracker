import './ExpenseItem.css';

const ExpenseItem = ({ props: { title, date, amount } }) => {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className='expense-container'>
      <div className='expense-item-description'>
        <div className='expense-item-date'>
          <div className='date-wrapper'>
            <div className='expense-month'>{month}</div>
            <div className='expense-year'>{year}</div>
          </div>
          <div>
            <div className='expense-date'>{day}</div>
          </div>
        </div>
        <h2 className='expense-item-title'>{title}</h2>
      </div>
      <div className='expense-item-price'>{amount}</div>
    </div>
  );
};

export default ExpenseItem;
