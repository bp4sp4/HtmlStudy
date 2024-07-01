import React from "react";
import Router from "./components/route";
import { useState, useEffect } from "react";

const getRandomColor = () => {
  const colors = ["#b5d692", "#a3cca2", "#d5e6f5"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const App = () => {
  const [bgColor, setBgColor] = useState("#fff");

  useEffect(() => {
    setBgColor(getRandomColor());
  }, []);

  return (
    <div>
      <div style={{ backgroundColor: bgColor }}>
        <Router />
      </div>
    </div>
  );
};

export default App;
