import React, { useEffect } from "react";

const APICall = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <></>;
};

export default APICall;
