import React, { useState, useEffect } from "react";

function App2() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    alert("i will");
    return () => {
      clearTimeout();
    };
  }, [count]);

  useEffect(() => {
    const intervalsIder = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => {
      clearInterval(intervalsIder);
    };
  }, []);

  function handlerFunc() {
    setCount(count + 1);
  }
  function handlerFunc2() {
    setTotal(total + 2);
  }
  return (
    <div>
      {seconds}
      <h4>{count}</h4>
      <h5>{total}</h5>
      <button onClick={handlerFunc}>click for count</button>
      <button onClick={handlerFunc2}>click for total </button>
    </div>
  );
}

export default App2;


