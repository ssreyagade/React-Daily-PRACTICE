import React from "react";
import { useState } from "react";

const UseStateHooks2 = () => {
  const [name, setName] = useState("Click ON More to change colour");
  const [colour, setColour] = useState("Cream");
  return (
    <>
      <h2>Here we are using Multiple UseStates</h2>
      <h3 style={{ color: colour }}>Name: {name}</h3>
      <button
        className="buttons "
        onClick={() => {
          setName("red");
        }}
      >
        Click here Name
      </button>
      <button
        className="buttons "
        onClick={() => {
          setColour("red");
        }}
      >
        Click here Colour
      </button>
    </>
  );
};

export default UseStateHooks2;
