import React from "react";

import styles from "./styles.module.scss";

export const Grid = props => {
  const style = {
    gridTemplateColumns: `repeat(${props.col},1fr)`
  };
  return (
    <div style={style} className={styles.GridContainer}>
      {props.children}
    </div>
  );
};
