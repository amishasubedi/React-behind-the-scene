import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";

// React will only rerun App function if state changes
// only the difference between virtual snapshots is considered for the updates made through the real DOM.
function App() {
  const [showParagraph, setShowParagraph] = useState(false); // showing element conditionally
  // so currently our state is false, so we only see Hi there. - add function to change the state

  console.log("App Running"); // since app executes every time state changes, App running will be output on console everytime you click toggle

  const toggleParagraphHandler = () => {
    // opposite of show paragraph, but instead of passing it directly,
    // use a function, pass it as a parameter then reverse it
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}

      {/* this function triggers Toggle Paragraph Button when clicked*/}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
