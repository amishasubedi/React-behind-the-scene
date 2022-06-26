import React from "react";
import MyParagraph from "./MyParagraph";

// App component re-evaluates because of state management
const DemoOutput = (props) => {
  console.log("Demo-output"); // props changes with every click
  return <MyParagraph>{props.show ? "This is new" : ""}</MyParagraph>;

  // myparagraph is a child component of Demo output. Demo output is a child component of App. since app is re-evalauted,
  // demo ouput will also re- evaluate, and which will then re-evaluate my paragraph
  // this continues down the component tree -
  //
};

export default DemoOutput;
