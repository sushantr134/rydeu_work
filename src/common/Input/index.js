import React from "react";
import styles from "./styles.module.scss";

export const Input = ({ style, min, max, onchange, defaultValue, formStateInputType, Grouped, type, placeholder }) => {
  return (
    <input
      style={style}
      min={min}
      max={max}
      onChange={event => onchange(formStateInputType, event.target.value)}
      className={`${styles.input} ${Grouped === false && styles.individual}`}
      placeholder={placeholder}
      type={type}
      value={defaultValue}
    />
  );
};
