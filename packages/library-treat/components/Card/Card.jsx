import React from "react";

import styles from "./Card.treat";

const Card = (props) => {
  return <div className={styles}>{props.children}</div>;
};

export default Card;
