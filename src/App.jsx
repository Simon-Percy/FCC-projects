import React, { useState } from "react";
import "./App.css";
import { evaluate } from "mathjs";

function App() {
  const [equation, setEquation] = useState("0");
  const handleClick = (e) => {
    if (equation.charAt(0) == 0) {
      setEquation(equation.replace("0", ""));
    }

    setEquation((prev) => prev + e.target.textContent);
  };

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
          <button
            className="cal-btn"
            id="decimal"
            onClick={() => {
              equation.includes(".") ? { handleClick } : null;
            }}
          >
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
            *
          </button>
          <button
            className="cal-btn"
            id="equals"
            onClick={() => {
              try {
                setEquation(evaluate(equation).toString());
              } catch (e) {
                setEquation(
                  evaluate(
                    equation.replace(equation.charAt(e.message[21] - 2), "")
                  )
                );
                console.dir(e.message[21]);
              }
            }}
          >
            =
          </button>
          <button
            className="cal-btn"
            id="clear"
            onClick={() => setEquation("0")}
          >
            clear
          </button>
        </div>
      </div>
    </>
  );
}
export default App;
