import React, { useState, useEffect } from "react";

export default function App4() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json); // Check if data is received
        setData(json);
      })
      .catch((error) => console.log(error));
  }, []);

  return <>{data.length > 0 ? <div>{data[0].title}</div> : <p>No Data</p>}</>;
}
