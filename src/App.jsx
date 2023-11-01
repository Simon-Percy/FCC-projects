import React, { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";
function App() {
  const [textArea, setTextArea] = useState(
    "# Hello \n ## Hello again \n [FCC](https://www.freecodecamp.org/) \n\n` They are cool `\n\n ```This is alright what about now\n```\n * code\n * code\n * repeat\n > nice right border\n\n ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n\n **Is that it**"
  );
  const handleChange = (e) => setTextArea(e.target.value);

  return (
    <div id="drum-machine">
      <div id="display">
        <button className="drum-pad">Q</button>
        <button className="drum-pad">W</button>
        <button className="drum-pad">E</button>
        <button className="drum-pad">A</button>
        <button className="drum-pad">S</button>
        <button className="drum-pad">D</button>
        <button className="drum-pad">Z</button>
        <button className="drum-pad">X</button>
        <button className="drum-pad">C</button>
      </div>
    </div>
  );
}
export default App;
