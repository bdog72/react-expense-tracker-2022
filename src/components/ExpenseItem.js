//
//

import React from 'react';

import './ExpenseItem.css';

function ExpenseItem({ date, title, price }) {
  const month = date.toLocaleString('en-US', {
    month: 'short',
  });

  const day = date.toLocaleString('en-US', {
    day: '2-digit',
  });

  const year = date.getFullYear();

  return (
    <div className='expense-item'>
      <div className=''>
        <div className=''>{month}</div>
        <div className=''>{day}</div>
        <div className=''>{year}</div>
      </div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
