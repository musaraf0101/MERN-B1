import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);

  const increase = () => {
    setValue(value + 1);
  };
  const decrese = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  return (
    <div>
      <p>{value}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrese}>-</button>
    </div>
  );
};

export default App;
