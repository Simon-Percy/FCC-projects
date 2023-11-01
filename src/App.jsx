import React, { useEffect, useState } from "react";
import "./App.css";
import Preview from "./Preview";

function App() {
  return (
    <textarea name="" id="editor" cols="30" rows="10">
      <Preview />
    </textarea>
  );
}
export default App;
