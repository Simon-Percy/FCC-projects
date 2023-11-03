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
        console.log(refs.current[index]);
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
        <button className="drum-pad" id="Heater 1" onClick={handleClick}>
          <audio
            ref={refs[0]}
            className="clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            id="Q"
          ></audio>
          Q
        </button>
        <button className="drum-pad" id="Heater 2" onClick={handleClick}>
          <audio
            className="clip"
            ref={refs[1]}
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            id="W"
          ></audio>
          W
        </button>
        <button className="drum-pad" id="Heater 3" onClick={handleClick}>
          <audio
            className="clip"
            ref={refs[2]}
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            id="E"
          ></audio>
          E
        </button>
        <button className="drum-pad" id="Heater 4" onClick={handleClick}>
          <audio
            className="clip"
            ref={refs[3]}
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            id="A"
          ></audio>
          A
        </button>
        <button className="drum-pad" id="Clap" onClick={handleClick}>
          <audio
            className="clip"
            ref={refs[4]}
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            id="S"
          ></audio>
          S
        </button>
        <button className="drum-pad" id="Open-HH" onClick={handleClick}>
          <audio
            className="clip"
            ref={refs[5]}
            src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            id="D"
          ></audio>
          D
        </button>
        <button className="drum-pad" id="Kick-n'-Hat" onClick={handleClick}>
          <audio
            className="clip"
            ref={refs[6]}
            src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            id="Z"
          ></audio>
          Z
        </button>
        <button className="drum-pad" id="Kick" onClick={handleClick}>
          <audio
            className="clip"
            ref={refs[7]}
            src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            id="X"
          ></audio>
          X
        </button>
        <button className="drum-pad" id="Closed-HH" onClick={handleClick}>
          <audio
            className="clip"
            ref={refs[8]}
            src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            id="C"
          ></audio>
          C
        </button>
      </div>
      <div id="display">{beat}</div>
    </div>
  );
}
export default App;
