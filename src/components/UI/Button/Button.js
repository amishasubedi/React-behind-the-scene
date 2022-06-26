import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);

// Remember we are not passing primitive value to Button. we are passing function when a button is clicked, so basically
// the functions are just objects in js, React.memo compares props.onClick === props.previous.onClick
// It compares two objects, but even if they have the same content, they are never equivalent in js. their comparison
// will result in false. so props technically changes, and button function is re-evaluated.
