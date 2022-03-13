//
//

import Expenses from './components/Expenses/Expenses';
import './App.css';

const App = () => {
  const expenses = [
    {
      id: 1,
      date: new Date(2022, 6, 25),
      title: 'Car Insurance 1',
      price: 294.67,
    },
    {
      id: 2,
      date: new Date(2023, 7, 26),
      title: 'Car Insurance 2',
      price: 295.67,
    },
    {
      id: 3,
      date: new Date(2024, 8, 27),
      title: 'Car Insurance 3',
      price: 296.67,
    },
    {
      id: 4,
      date: new Date(2025, 9, 28),
      title: 'Car Insurance 4',
      price: 297.67,
    },
  ];

  return (
    <div className='App'>
      <h1>Let's Go</h1>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
