import React, { useState, useEffect } from "react";

export default function Star({ top, left, width, height }) {
  const [blur, setBlur] = useState(Math.floor(Math.random() * 4) + 3);
  const [spread, setSpread] = useState(Math.floor(Math.random() * 6));

  useEffect(() => {
    const twinklingInterval = setInterval(() => {
      const randomBlur = Math.floor(Math.random() * 4) + 3;
      const randomSpread = Math.floor(Math.random() * 6);

      setBlur(randomBlur);
      setSpread(randomSpread);
    }, 1000);

    return () => {
      clearInterval(twinklingInterval);
    };
  }, []);

  const style = {
    top: `${top}%`,
    left: `${left}%`,
    height: `${height}px`,
    width: `${width}px`,
    boxShadow: `0 0 ${blur}px ${spread}px white`,
    transition: "box-shadow 1s ease-in-out",
  };

  return <div className="star" style={style}></div>;
}
