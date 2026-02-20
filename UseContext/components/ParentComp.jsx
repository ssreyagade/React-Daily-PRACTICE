import React, { createContext } from "react";
import Child1Comp from "./Child1Comp";

const sname = createContext();
const sphone = createContext();

const ParentComp = () => {
  const nm = "Shreya";
  const ph = 1234567890;
  return (
    <>
      <h1>This is Parent component</h1>

      <sname.Provider value={nm}>
        <sphone.Provider value={ph}>
          <Child1Comp></Child1Comp>
        </sphone.Provider>
      </sname.Provider>
    </>
  );
};
export default ParentComp;
export { sname, sphone };
