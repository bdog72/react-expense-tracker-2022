//
//

import React from 'react';

import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2022, 6, 25);
  const expenseTitle = 'Car Insurance';
  const expensePrice = 294.67;

  return (
    <div className='expense-item'>
      <div className=''>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expensePrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
