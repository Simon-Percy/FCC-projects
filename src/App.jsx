import React, { useState, useEffect } from "react";
import "./App.css";
import { FaFacebook, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; //be able to share the quote

function App() {
  const [quote, setQuote] = useState({ author: "", content: "" });

  //smoothly change the colors
  const transition = "all 1s";
  //random darkish color on each render
  const colorChange = () => {
    const red = Math.floor(Math.random() * 128);
    const green = Math.floor(Math.random() * 128);
    const blue = Math.floor(Math.random() * 128);
    return `rgb(${red},${green},${blue})`;
  };
  const [randomColor, setrandomColor] = useState(() => colorChange());
  /*
  !note to self change these using useRef()
  */
  document.getElementById("root").style.backgroundColor = randomColor;
  document.getElementById("root").style.transition = transition;

  async function updateQuote() {
    setrandomColor(colorChange());
    try {
      // fetch a random quote from the Quotable API
      const response = await fetch("https://api.quotable.io/random");
      if (response.ok) {
        const data = await response.json();
        setQuote(data);
      } else {
        console.log(`Error : ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error:fetching data:", error);
    }
  }
  //lauch function on each render
  useEffect(() => {
    updateQuote();
  }, []);

  return (
    <div id="quote-box" style={{ backgroundColor: "white" }}>
      <h2 id="text" style={{ color: randomColor, transition }}>
        <FaQuoteLeft size="30" />
        {quote.content}
        <FaQuoteRight size="30" />
      </h2>
      <p id="author">- {quote.author}</p>
      <button
        style={{ backgroundColor: randomColor, transition }}
        id="new-quote"
        onClick={() => updateQuote()}
      >
        New quote
      </button>
      <a id="tweet-quote" href="twitter.com/intent/tweet">
        <FaXTwitter
          size="30"
          style={{
            color: "white",
            backgroundColor: randomColor,
            borderRadius: 8,
            marginRight: 10,
            transition,
          }}
        />
        <FaFacebook
          size="30"
          style={{
            color: "white",
            backgroundColor: randomColor,
            borderRadius: 8,
            transition,
          }}
        />
      </a>
    </div>
  );
}

export default App;
