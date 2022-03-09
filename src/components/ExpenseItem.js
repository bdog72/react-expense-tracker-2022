//
//

import React from 'react';

import './ExpenseItem.css';

function ExpenseItem({ date, title, price }) {
  return (
    <div className='expense-item'>
      <div className=''>{date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
