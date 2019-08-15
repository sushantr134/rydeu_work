import React from "react";
import styles from "./styles.module.scss";

export const Input = ({ style, min, max, onchange, Grouped, type, placeholder }) => {
  return (
    <input
      style={style}
      min={min}
      max={max}
      onChange={onchange}
      className={`${styles.input} ${Grouped === false && styles.individual}`}
      placeholder={placeholder}
      type={type}
    />
  );
};
