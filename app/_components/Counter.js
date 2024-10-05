
"use client"

import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((c) => c + 1);
    console.log("clicked");
  };
    return (<div>
      <button onClick={handleClick}>{count}</button>;
    </div>)
}
