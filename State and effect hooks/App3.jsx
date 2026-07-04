import React from "react";

import { useEffect, useState } from "react";

export default function App3() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const update = new Date();
      setDate(update.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <div>Date:{date}</div>;
}
