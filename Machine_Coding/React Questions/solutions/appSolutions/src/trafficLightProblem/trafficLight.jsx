import React, { useEffect, useState } from "react";

const data = {
  red: {
    bgColor: "red",
    timer: "3000",
    next: "green",
    stop: false,
  },
  green: {
    bgColor: "green",
    timer: "2000",
    next: "yellow",
    stop: false,
  },
  yellow: {
    bgColor: "yelow",
    timer: "4000",
    next: "red",
    stop: true,
  },
};

const TrafficLight = () => {
  const [light, setLight] = useState("red");
  const [nextLight, setNextLight] = useState("");
  const [delay, setDelay] = useState(0);
  useEffect(() => {
    determineLight(data);
  }, [light]);

  const determineLight = (data) => {
    for (const key in data) {
      if (light === key) {
        setDelay(data[key].timer);
        setNextLight(data[key].next);
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLight(nextLight);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div>
      <h1>Traffic Light Problem</h1>
      <div>{light}</div>
    </div>
  );
};

export default TrafficLight;
