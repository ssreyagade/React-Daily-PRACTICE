import React, { useRef } from "react";

const UseRefHook = () => {
  const data = useRef(null);
  console.log(data);

  return (
    <>
      <label>Enter Name</label>
      <input
        type="text"
        name="username"
        id="username"
        ref={data}
        onChange={() => {
          console.log(data);
        }}
      />
    </>
  );
};

export default UseRefHook;
