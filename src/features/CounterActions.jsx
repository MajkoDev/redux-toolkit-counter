import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  reset,
  multiplyByFour,
  divideByThree,
  exponentByTwo,
  incrementByAmount,
  decrementByAmount,
} from './counterSlice';

const CounterActions = () => {
  const dispatch = useDispatch();

  const [incNum, setIncNum] = useState(0);
  const [decNum, setDecNum] = useState(0);

  function decrementingByAmount() {
    dispatch(decrementByAmount(Number(decNum) || 0));
  }

  function incrementingByAmount() {
    dispatch(incrementByAmount(Number(incNum) || 0));
  }

  return (
    <>
      <h3>Actions of Counter</h3>
      <div>
        <p>
          <b>Essential Actions</b>
        </p>
        <button onClick={() => dispatch(increment())}>Add</button>
        <button onClick={() => dispatch(decrement())}>Subtract</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <div>
        <p>
          <b>Intermediate Actions</b>
        </p>
        <button onClick={() => dispatch(multiplyByFour())}>*4</button>
        <button onClick={() => dispatch(divideByThree())}>/3</button>
        <button onClick={() => dispatch(exponentByTwo())}>**2</button>
      </div>

      <div>
        <p>
          <b>Advanced Actions</b>
        </p>
        <button onClick={incrementingByAmount}>+</button>
        <input
          type="number"
          value={incNum}
          onChange={(e) => setIncNum(e.target.value)}
        />
        <br />

        <button onClick={decrementingByAmount}>-</button>
        <input
          type="number"
          value={decNum}
          onChange={(e) => setDecNum(e.target.value)}
        />
        <br />
      </div>
    </>
  );
};

export default CounterActions;
