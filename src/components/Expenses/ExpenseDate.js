import './ExpenseDate.css';

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className='expense-item-date'>
      <div className='date-wrapper'>
        <div className='expense-month'>{month}</div>
        <div className='expense-year'>{year}</div>
      </div>
      <div>
        <div className='expense-date'>{day}</div>
      </div>
    </div>
  );
};

export default ExpenseDate;
