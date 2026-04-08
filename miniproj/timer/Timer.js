import React, { useState, useEffect, useRef } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const handleInput = (event) => {
    setTime(parseInt(event.target.value) * 60);
  };
  const formatTime = () => {
    const min = String(Math.floor(time / 60)).padStart(2, "0");
    const sec = String(time % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };
  const [isActive, setActive] = useState(false);
  const [isPause, setPause] = useState(false);
  const handleStart = () => {
    setActive(true);
    setPause(false);
  };
  const handlePause = () => {
    setPause(!isPause);
  };
  const intervalRef = useRef(null);
  useEffect(() => {
    if (isActive && !isPause && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(intervalRef.current);
      setActive(false);
      alert("time is up");
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, isPause, time]);
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setActive(false);
    setPause(false);
    setTime(0);
  };
  return (
    <div>
      <h1>Counter Down Timer</h1>
      <input
        type="number"
        placeholder="enter time in mintues"
        onChange={handleInput}
      />
      <div>{formatTime()}</div>

      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
export default Timer;
