import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  const refs = keys.map(() => useRef());
  const [beat, setBeat] = useState("");
  const handleClick = (e) => {
    e.target.firstChild.play();
    setBeat(e.target.id);
  };
  const handleKeyDown = (e) => {
    keys.map((key, index) => {
      if (e.key.toUpperCase() == key) {
        refs[index].current.play() && refs[index].current.parentElement.focus();
        setBeat(refs[index].current.parentElement.id);
      }
    });
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <div id="drum-machine">
      <div id="drum-box">
        {" "}
        <button className="cal-btn" id="Heater 1" onClick={handleClick}>
          0
        </button>
        <button className="cal-btn" id="Heater 2" onClick={handleClick}>
          1
        </button>
        <button className="cal-btn" id="Heater 3" onClick={handleClick}>
          2
        </button>
        <button className="cal-btn" id="Heater 4" onClick={handleClick}>
          3
        </button>
        <button className="cal-btn" id="Clap" onClick={handleClick}>
          4
        </button>
        <button className="cal-btn" id="Open-HH" onClick={handleClick}>
          5
        </button>
        <button className="cal-btn" id="Kick-n'-Hat" onClick={handleClick}>
          6
        </button>
        <button className="cal-btn" id="Kick" onClick={handleClick}>
          7
        </button>
        <button className="cal-btn" id="Closed-HH" onClick={handleClick}>
          8
        </button>
        <button className="cal-btn" id="Closed-HH" onClick={handleClick}>
          9
        </button>
        <button className="cal-btn" id="Closed-HH" onClick={handleClick}>
          .
        </button>
        <button className="cal-btn" id="Closed-HH" onClick={handleClick}>
          -
        </button>
        <button className="cal-btn" id="Closed-HH" onClick={handleClick}>
          +
        </button>
        <button className="cal-btn" id="Closed-HH" onClick={handleClick}>
          /
        </button>
        <button className="cal-btn" id="Closed-HH" onClick={handleClick}>
          x
        </button>
        <button className="cal-btn" id="Closed-HH" onClick={handleClick}>
          =
        </button>
      </div>
      <div id="display">{beat}</div>
    </div>
  );
}
export default App;
