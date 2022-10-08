import './App.css';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {title: 'Car Insurance', amount: 274.23, date: new Date(2022, 2, 5)},
    {title: 'Car Insurance2', amount: 232.23, date: new Date(2021, 12, 13)},
    {title: 'Car Insurance3', amount: 254.23, date: new Date(2019, 4, 1)},
    {title: 'Car Insurance4', amount: 174.23, date: new Date(2020, 5, 6)},
  ]
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
