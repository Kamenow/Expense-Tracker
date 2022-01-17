import './ExpenseItem.css';

const ExpenseItem = () => {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;

  console.log(expenseDate);

  return (
    <div className='expense-container'>
      <div className='expense-item-description'>
        <h2 className='expense-item-title'>{expenseTitle}</h2>
        <div className='expense-item-date'>{`${expenseDate.getFullYear()}-${expenseDate.getMonth()}-${expenseDate.getDate()}`}</div>
      </div>
      <div className='expense-item-price'>{expenseAmount}</div>
    </div>
  );
};

export default ExpenseItem;
