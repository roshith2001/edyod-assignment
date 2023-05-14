import './App.css';

import Home from './components/Home';

const data = [
  {
    months: '12',
    perMonth: '8',
    total: '99',
    recommended: false,
    expired: true,
  },
  {
    months: '12',
    perMonth: '15',
    total: '179',
    recommended: true,
    expired: false,
  },
  {
    months: '9',
    perMonth: '25',
    total: '149',
    recommended: false,
    expired: false,
  },
  {
    months: '3',
    perMonth: '33',
    total: '99',
    recommended: false,
    expired: false,
  },
]

function App() {
  return (
    <div className="App">
      <Home paymentData={data} />
    </div>
  );
}

export default App;
