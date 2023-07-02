import { useSelector } from 'react-redux';

const Counter = () => {
  // receiving value from redux store with useSelector hook
  const count = useSelector((state) => state.counter.value);

  // with help of ChatGPT:
  // function limit the number to three digits beyond the decimal point
  // for detailed documentation, check 'README.md'
  function displayThreeDigits(num) {
    const formattedNumber = num.toFixed(3);
    return num % 1 !== 0 ? formattedNumber : parseInt(formattedNumber);
  }

  return (
    <>
      <h2>Redux Toolkit</h2>
      <h1>{displayThreeDigits(count)}</h1>
    </>
  );
};

export default Counter;
