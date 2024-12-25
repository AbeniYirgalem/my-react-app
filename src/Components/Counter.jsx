import { useState } from "react";


function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  const HandleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <button onClick={handleIncrease}>Increament</button> <br /> <br />
      count: {count} <br /> <br />
      <button disabled={count === 0 ? true : false} onClick={handleDecrease}>
        Decreament
      </button> 
      <button onClick={HandleReset}>Reset</button>
    </div>
  );
}

export default Counter;
