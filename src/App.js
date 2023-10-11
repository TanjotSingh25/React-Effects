import { useState } from "react";
import Star from "./Star";

export default function App() {
  const StarComponents = [];
  for (let i = 0; i < 200; i++) {
    let radius = Math.floor(Math.random() * 5);
    StarComponents.push(
      <Star
        top={Math.floor(Math.random() * 100)}
        left={Math.floor(Math.random() * 100)}
        width={radius}
        height={radius}
      />
    );
  }
  return <div>{StarComponents}</div>;
}
