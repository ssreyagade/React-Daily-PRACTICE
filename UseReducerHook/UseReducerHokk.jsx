import React, { useReducer } from "react";

const UseReducerHokk = () => {
  const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
      case "incr":
        return state + 1;
        break;
      case "decr":
        return state - 1;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h2>Counter:{count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "incr" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decr" });
        }}
      >
        Decrement
      </button>
    </>
  );
};

export default UseReducerHokk;
