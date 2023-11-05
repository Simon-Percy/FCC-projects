import React, { useState } from "react";
import "./App.css";
import { evaluate } from "mathjs";

function App() {
  const [equation, setEquation] = useState("0");
  const [decimal, setDecimal] = useState(false);
  const decimalChecker = (e) => {
    if (
      e.target.textContent == "+" ||
      e.target.textContent == "-" ||
      e.target.textContent == "*" ||
      e.target.textContent == "/"
    ) {
      setDecimal(false);
    } else if (e.target.id === "decimal") {
      setDecimal(true);
    }
  };
  function hasConsecutiveOperators(equation, consecutiveOperators) {
    for (let i = 0; i < equation.length - 1; i++) {
      const char = equation[i];
      const nextChar = equation[i + 1];
      if (
        consecutiveOperators.includes(char) &&
        consecutiveOperators.includes(nextChar)
      ) {
        return true;
      }
    }
    return false;
  }
  const handleClick = (e) => {
    if (equation === "0" && e.target.id !== "decimal") {
      setEquation(e.target.textContent);
    } else {
      if (e.target.id === "decimal" && decimal) {
        return;
      }
      decimalChecker(e);
      setEquation((prev) => prev + e.target.textContent);
    }
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
            *
          </button>
          <button
            className="cal-btn"
            id="equals"
            onClick={() => {
              try {
                if (hasConsecutiveOperators(equation, "-/+")) {
                  throw new Error("Consecutive operators");
                }
                setEquation(evaluate(equation).toString());
              } catch (e) {
                console.log(e.message);
                if (
                  equation.lastIndexOf("-") > equation.lastIndexOf("+") &&
                  equation.lastIndexOf("-") > equation.lastIndexOf("*") &&
                  equation.lastIndexOf("-") > equation.lastIndexOf("/")
                ) {
                  setEquation(evaluate(equation.replace(/[+/*]/g, "")));
                } else if (
                  equation.lastIndexOf("+") > equation.lastIndexOf("*") &&
                  equation.lastIndexOf("+") > equation.lastIndexOf("/")
                ) {
                  setEquation(evaluate(equation.replace(/[-/*]/g, "")));
                } else if (
                  equation.lastIndexOf("*") > equation.lastIndexOf("/")
                ) {
                  setEquation(evaluate(equation.replace(/[+/-]/g, "")));
                } else setEquation(evaluate(equation.replace(/[+*-]/g, "")));
              }
            }}
          >
            =
          </button>
          <button
            className="cal-btn"
            id="clear"
            onClick={() => {
              setEquation("0");
              setDecimal(false);
            }}
          >
            clear
          </button>
        </div>
      </div>
    </>
  );
}
export default App;
