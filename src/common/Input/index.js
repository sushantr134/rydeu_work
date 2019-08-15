import React from "react";
import styles from "./styles.module.scss";

export const Input = props => {
  return (
    <input
      style={props.style}
      min={props.min}
      max={props.max}
      className={`${styles.input} ${props.Grouped === false && styles.individual}`}
      placeholder={props.placeholder}
      type={props.type}
    />
  );
};
