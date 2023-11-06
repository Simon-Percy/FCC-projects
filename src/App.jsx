import React, { useState } from "react";
import "./App.css";
import { evaluate } from "mathjs";

function App() {
  const handleClick = (e) => {};

  return (
    <div id="container">
      <div id="break">
        <p id="break-label">break</p>
        <button id="break-increment">⬆️</button>
        <button id="break-decrement">⬇️</button>
        <p id="break-length">20:00</p>
      </div>

      <div id="timer">time009</div>
      <div id="session">
        <p id="session-label">session</p>
        <button id="session-increment">⬆️</button>
        <button id="session-decrement">⬇️</button>
        <p id="session-length">20:00</p>
      </div>
    </div>
  );
}
export default App;
