import React from "react";
import Child2Comp from "./Child2Comp";

const Child1Comp = () => {
  return (
    <>
      <h1>This is child 1 component</h1>
      <Child2Comp></Child2Comp>
    </>
  );
};
export default Child1Comp;
