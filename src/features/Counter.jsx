import { useSelector } from 'react-redux';

const Counter = () => {
  // receiving value from redux store with useSelector hook
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <h2>Redux Toolkit</h2>
      <h1>{count}</h1>
    </>
  );
};

export default Counter;
