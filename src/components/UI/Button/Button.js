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

/* Remember we are not passing primitive value to Button. we are passing function when a button is clicked, so basically
 the functions are just objects in js, React.memo compares props.onClick === props.previous.onClick
 It compares two objects, but even if they have the same content, they are never equivalent in js. their comparison
 will result in false. so props technically changes, and button function is re-evaluated.

 However, we can make React memo work for prop values that are objects as well. How?
-> using useCallBack() hook. - allows to store a function across component executions - for instance
obj1 = {};
obj2 = {};
obj1 === obj2; ---> false

so,
obj1= obj2;
obj1 === obj2; ----> true


 */
