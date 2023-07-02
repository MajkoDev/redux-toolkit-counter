import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  reset,
  multiplyByFour,
  divideByThree,
  exponentByTwo,
} from './counterSlice';

const CounterActions = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h3>Actions of Counter</h3>
      <button onClick={() => dispatch(roundNumber())}>Rounded</button>
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
        <button>+</button>
        <input type="number" />
        <br />
        <button>-</button>
        <input type="number" />
        <br />
      </div>
    </>
  );
};

export default CounterActions;
