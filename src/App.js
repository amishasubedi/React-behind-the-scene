import React, { useCallback, useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/UI/Button/Demo/DemoOutput";

// React will only rerun App function if state changes
// only the difference between virtual snapshots is considered for the updates made through the real DOM.
function App() {
  const [showParagraph, setShowParagraph] = useState(false); // showing element conditionally
  // so currently our state is false, so we only see Hi there. - add function to change the state

  const [allowToggling, setAllowToggling] = useState(false);

  console.log("App Running"); // since app executes every time state changes, App running will be output on console everytime you click toggle

  /**
   * using call back prevents function recreation, so the value of allow toggling never changed. to prevent this, we
   * should add allowToggling as a dependency
   */
  const toggleParagraphHandler = useCallback(() => {
    // reuse the same function object - useCallback
    // opposite of show paragraph, but instead of passing it directly,
    // use a function, pass it as a parameter then reverse it
    if (allowToggling) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph); // reversing true to false, false to true
    }
  }, [allowToggling]); // empty array of dependency because there are none

  const allowTogglingHandler = () => {
    setAllowToggling(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/*showParagraph && <p>This is new!</p>*/}
      <DemoOutput show={showParagraph} />{" "}
      {/*----- but if the value is hardcoded to false} */}
      {/*<DemoOutput show={false} />{" "} */}
      {/*the props didnt change, but demo output is printed in the screen ,why was demo-output re-executed? 
      It is because demo output is a part of App component, in app component state changes because of toggleParagraphHandler function. So,
    App component re-executed. So, child component is also re-evalauted because the state of parent component changed}

      {/* this function triggers Toggle Paragraph Button when clicked*/}
      <Button onClick={allowTogglingHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
