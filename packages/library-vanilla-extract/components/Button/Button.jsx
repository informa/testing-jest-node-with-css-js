import React from "react";

import styles from "./Button.css";

const Button = (props) => {
  return <button onClick={props.onClick} className={styles}>{props.children}</button>;
};

export default Button;
