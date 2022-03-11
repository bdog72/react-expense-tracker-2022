//
//

import React from 'react';

import ExpenseItem from './ExpenseItem';

import './Expenses.css';

export default function Expenses(props) {
  return (
    <div className='expenses'>
      <ExpenseItem
        date={props.items[0].date}
        title={props.items[0].title}
        price={props.items[0].price}
      />
      <ExpenseItem
        date={props.items[1].date}
        title={props.items[1].title}
        price={props.items[1].price}
      />
      <ExpenseItem
        date={props.items[2].date}
        title={props.items[2].title}
        price={props.items[2].price}
      />
      <ExpenseItem
        date={props.items[3].date}
        title={props.items[3].title}
        price={props.items[3].price}
      />
    </div>
  );
}
