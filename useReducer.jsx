import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      return state;
  }
};

export default function useReducer() {
  const [count, disptach] = useReducer(reducer, initialState);
  return (
    <div>
      <button onclick={() => dispatch("Increment")}>Increase</button>
      <button onclick={() => dispatch("Decrement")}>Decrease</button>
    </div>
  );
}
