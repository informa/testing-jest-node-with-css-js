import React from "react";

import styles from "./Heading.treat";

const Heading = (props) => {
  return <h1 className={styles}>{props.children}</h1>;
};

export default Heading;
