import React, { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";
function App() {
  const [textArea, setTextArea] = useState(
    "# Hello \n ## Hello again \n [FCC](https://www.freecodecamp.org/) \n\n` They are cool `\n\n ```This is alright what about now\n```\n * code\n * code\n * repeat\n > nice right border\n\n ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n\n **Is that it**"
  );
  const handleChange = (e) => setTextArea(e.target.value);

  return (
    <>
      <textarea
        rows={20}
        id="editor"
        value={textArea}
        onChange={handleChange}
      />

      <div id="preview">
        <ReactMarkdown>{textArea}</ReactMarkdown>
      </div>
    </>
  );
}
export default App;
