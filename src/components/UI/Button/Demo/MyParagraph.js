import React from "react";

// App component re-evaluates because of state management
const MyParagraph = (props) => {
  console.log("myparagraph-output"); // props changes with every click
  return <p>{props.children}</p>;
};

export default MyParagraph;
