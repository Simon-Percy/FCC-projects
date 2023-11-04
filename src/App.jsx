import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  const refs = keys.map(() => useRef());
  const [cal, setCal] = [];
  const [equation, setEquation] = useState(0);
  const handleClick = (e) => {
    setEquation((prev) => prev + e.target.textContent);
    setCal((...cal) => [...cal, prev]);
  };
  const handleKeyDown = (e) => {
    keys.map((key, index) => {
      if (e.key.toUpperCase() == key) {
        refs[index].current.play() && refs[index].current.parentElement.focus();
        setEquation(refs[index].current.parentElement.id);
      }
    });
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <>
      <div id="calulator-box">
        <div id="display">{equation}</div>
        <div id="buttons">
          {" "}
          <button className="cal-btn" id="zero" onClick={handleClick}>
            0
          </button>
          <button className="cal-btn" id="one" onClick={handleClick}>
            1
          </button>
          <button className="cal-btn" id="two" onClick={handleClick}>
            2
          </button>
          <button className="cal-btn" id="three" onClick={handleClick}>
            3
          </button>
          <button className="cal-btn" id="four" onClick={handleClick}>
            4
          </button>
          <button className="cal-btn" id="five" onClick={handleClick}>
            5
          </button>
          <button className="cal-btn" id="six" onClick={handleClick}>
            6
          </button>
          <button className="cal-btn" id="seven" onClick={handleClick}>
            7
          </button>
          <button className="cal-btn" id="eight" onClick={handleClick}>
            8
          </button>
          <button className="cal-btn" id="nine" onClick={handleClick}>
            9
          </button>
          <button className="cal-btn" id="decimal" onClick={handleClick}>
            .
          </button>
          <button className="cal-btn" id="subtract" onClick={handleClick}>
            -
          </button>
          <button className="cal-btn" id="add" onClick={handleClick}>
            +
          </button>
          <button className="cal-btn" id="divide" onClick={handleClick}>
            /
          </button>
          <button className="cal-btn" id="multiply" onClick={handleClick}>
            x
          </button>
          <button
            className="cal-btn"
            id="equals"
            onClick={() => console.log(cal)}
          >
            =
          </button>
          <button className="cal-btn" id="clear" onClick={() => setEquation(0)}>
            clear
          </button>
        </div>
      </div>
    </>
  );
}
export default App;
