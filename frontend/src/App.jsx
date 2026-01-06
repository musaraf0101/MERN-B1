import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("use Effect running", count);
  },[count]);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default App;
