import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const audio = useRef();
  const [beat, setBeat] = useState("");
  const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
  const handleClick = (e) => e.target.firstChild.play();
  const handleKeyDown = (e) => {
    keys.map((key) => {
      e.key.toUpperCase() === key &&
        audio.current.play() &&
        document.getElementById(key).parentElement.focus();
      setBeat(document.getElementById(e.key).parentElement.id);
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
            className="clip"
            ref="audio"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            id="Q"
          ></audio>
          Q
        </button>
        <button className="drum-pad" id="Heater 2" onClick={handleClick}>
          <audio
            className="clip"
            ref="audio"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            id="W"
          ></audio>
          W
        </button>
        <button className="drum-pad" id="Heater 3" onClick={handleClick}>
          <audio
            className="clip"
            ref="audio"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            id="E"
          ></audio>
          E
        </button>
        <button className="drum-pad" id="Heater 4" onClick={handleClick}>
          <audio
            className="clip"
            ref="audio"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            id="A"
          ></audio>
          A
        </button>
        <button className="drum-pad" id="Clap" onClick={handleClick}>
          <audio
            className="clip"
            ref="audio"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            id="S"
          ></audio>
          S
        </button>
        <button className="drum-pad" id="Open-HH" onClick={handleClick}>
          <audio
            className="clip"
            ref="audio"
            src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            id="D"
          ></audio>
          D
        </button>
        <button className="drum-pad" id="Kick-n'-Hat" onClick={handleClick}>
          <audio
            className="clip"
            ref="audio"
            src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            id="Z"
          ></audio>
          Z
        </button>
        <button className="drum-pad" id="Kick" onClick={handleClick}>
          <audio
            className="clip"
            ref="audio"
            src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            id="X"
          ></audio>
          X
        </button>
        <button className="drum-pad" id="Closed-HH" onClick={handleClick}>
          <audio
            className="clip"
            ref="audio"
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
