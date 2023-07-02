import { useSelector } from 'react-redux';
import './App.css';

import Counter from './features/Counter';
import CounterActions from './features/CounterActions';

function App() {
  return (
    <>
      <Counter />
      <CounterActions />
    </>
  );
}

export default App;
