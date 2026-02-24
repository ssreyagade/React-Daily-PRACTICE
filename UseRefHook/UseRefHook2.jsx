import React, { useRef, useState } from "react";

const UseRefHook2 = () => {
  const data = useRef(null);
  const [name, setName] = useState("");

  return (
    <>
      <label>Enter Name</label>
      <input
        type="text"
        name="username"
        id="username"
        ref={data}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <h2>{name}</h2>
    </>
  );
};

export default UseRefHook2;
