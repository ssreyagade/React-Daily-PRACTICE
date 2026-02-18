import React from "react";
import { useState } from "react";

const UseStateHook1 = () => {
  const [data, setData] = useState("Hey! Click button to change data");
  return (
    <>
      <div className="maindiv">
        <h2 className="heading">Change Data using useState</h2>
        <h3>{data}</h3>
        <button
          className="buttons"
          onClick={() => {
            setData("Hi ! I am Shreya ");
          }}
        >
          Click Me!
        </button>
      </div>
    </>
  );
};

export default UseStateHook1;
