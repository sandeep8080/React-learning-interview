import React, { useState, useEffect, useMemo, useCallback } from "react";
import Input from "./Input";
import StateLessComponent from "./stateLessComponent";

const UnderStadingHooks = () => {
  console.log("Component Start");
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [rdm, setRdm] = useState(0);
  let c;
  useEffect(() => {
    console.log("UseEffect Start");
    c = a + b;
    console.log(a, b, c, d);
  }, [a, b]);

  const d = useMemo(() => {
    console.log("UseMemo Called");
    return a + b;
  }, [a, b]);

  const OnBlurHandler = useCallback(
    (e) => {
      console.log("OnBLur Hablder called");
      if (e.target.name === "a") {
        setA(parseInt(e.target.value));
      } else {
        setB(parseInt(e.target.value));
      }
    },
    [a, b]
  );

  const handleOnClick = () => {
    const ran = Math.ceil(Math.random() * 5);
    setRdm(ran);
  };
  console.log("Component END");
  return (
    <div>
      <h1>Understanding Hooks In Depth</h1>
      <Input
        name="a"
        placeholder="Enter a Value of A"
        OnBlurHandler={OnBlurHandler}
      />
      <Input
        name="b"
        placeholder="Enter a value of B"
        OnBlurHandler={OnBlurHandler}
      />
      <p>
        Values are :{a},{b}
      </p>
      <p>SumEffect:{c}</p>
      <p>SumMemo:{d}</p>
      <button type="button" onClick={handleOnClick}>
        Display Some Random Number
      </button>
      <p>{rdm}</p>
      <StateLessComponent />
    </div>
  );
};

export { UnderStadingHooks };
