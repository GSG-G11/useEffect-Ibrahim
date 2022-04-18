
import React from "react";

const Mousedown = () => {
  const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    setCount(() => count + 1);
  };

  React.useEffect(() => {
    document.onmousedown = incrementCount;

    return () => {};
  });
  return (
    <div>
      <p>{count}</p>
    </div>
  );
};

export default Mousedown;
