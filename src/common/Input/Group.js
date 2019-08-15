import React from "react";
import styles from "./styles.module.scss";

export const Input = props => {
  return (
    <input
      className={`${styles.input} ${props.Grouped === false && styles.individual}`}
      placeholder={props.placeholder}
      type={props.type}
    />
  );
};
