//
//

import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 1,
      date: new Date(2022, 6, 25),
      title: 'Car Insurance 1',
      price: 294.67,
    },
    {
      id: 2,
      date: new Date(2023, 6, 25),
      title: 'Car Insurance 2',
      price: 295.67,
    },
    {
      id: 3,
      date: new Date(2024, 6, 25),
      title: 'Car Insurance 3',
      price: 296.67,
    },
    {
      id: 4,
      date: new Date(2024, 6, 25),
      title: 'Car Insurance 4',
      price: 297.67,
    },
  ];

  return (
    <div className='App'>
      <h1>Let's Go</h1>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        price={expenses[0].price}
      />
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        price={expenses[1].price}
      />
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        price={expenses[2].price}
      />
      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        price={expenses[3].price}
      />
    </div>
  );
}

export default App;
