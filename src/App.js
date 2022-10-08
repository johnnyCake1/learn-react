import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {title: 'Car Insurance', amount: 274.23, date: new Date(2022, 2, 5)},
    {title: 'Car Insurance2', amount: 232.23, date: new Date(2021, 12, 13)},
    {title: 'Car Insurance3', amount: 254.23, date: new Date(2019, 4, 1)},
    {title: 'Car Insurance4', amount: 174.23, date: new Date(2020, 5, 6)},
  ]
  return (
    <div className="App">
      <ExpenseItem 
        date={expenses[0].date} 
        title={expenses[0].title} 
        amount={expenses[0].amount}
      />
      <ExpenseItem 
        date={expenses[1].date} 
        title={expenses[1].title} 
        amount={expenses[1].amount}
      />
      <ExpenseItem 
        date={expenses[2].date} 
        title={expenses[2].title} 
        amount={expenses[2].amount}
      />
    </div>
  );
}

export default App;
