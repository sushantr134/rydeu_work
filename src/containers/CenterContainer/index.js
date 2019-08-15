import React from "react";
import styles from "./styles.module.scss";

export const CenterContainer = props => {
  return <div className={styles.centerContainer}>{props.children}</div>;
};
