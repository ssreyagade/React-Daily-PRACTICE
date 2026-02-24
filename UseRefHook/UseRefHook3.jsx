import React, { useState } from "react";

const UseRefHook3 = () => {
  const [name, setName] = useState("");

  return (
    <>
      <label>Enter Name</label>
      <input
        type="text"
        name="username"
        id="username"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h2>{name}</h2>
    </>
  );
};

export default UseRefHook3;
