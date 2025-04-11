import React from "react";
import "./CardHolders.css";

const CardHolders = (props) => {
  const classes = "card_holder " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default CardHolders;
