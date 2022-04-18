import React, { useEffect, useState } from "react";

const Mousemove = () => {
  const [width, setWidth] = useState({
    xAxis: 0,
    yAxis: 0,
  });

  const [backgroundColor, setBackGroundColor] = useState("white");

  const handleMovingMouse = (e) => {
    let xAxis = e.screenX;
    let yAxis = e.screenY;

    if (xAxis > window.innerWidth / 2) {
      setBackGroundColor("blue");
    } else {
      setBackGroundColor("tomato");
    }
  
    setWidth({ xAxis, yAxis });
  };

  useEffect(() => {
    document.addEventListener("mouseover", (e) => handleMovingMouse(e));
  });

  const { xAxis, yAxis } = width;
  return (
    <div style={{ background: backgroundColor, height: '100vh' }}>

      X :{xAxis} ||Y : {yAxis}
    </div>
  );
};

export default Mousemove;
