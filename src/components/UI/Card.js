import React from "react";
import classes from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={` ${classes.card}  ${props.className}`}>
      {props.children}
    </div>
  );
};

console.log(my)

export default Card;


``