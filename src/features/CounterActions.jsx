import { useDispatch } from 'react-redux';
import { decrement, increment, reset } from './counterSlice';

const CounterActions = () => {
  const dispatch = useDispatch();
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
          <b>Advanced Actions</b>
        </p>
      </div>
    </>
  );
};

export default CounterActions;
