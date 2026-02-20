import React from "react";
import { sname, sphone } from "./ParentComp";
import { useContext } from "react";
const Child3Comp = () => {
  const nm = useContext(sname);
  const ph = useContext(sphone);
  return (
    <>
      <h1>This is child Comp 3</h1>
      <h2>Name:{nm}</h2>
      <h2>Phone no:{ph}</h2>
    </>
  );
};

export default Child3Comp;
