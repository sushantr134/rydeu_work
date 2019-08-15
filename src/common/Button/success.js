import React from "react";

import styles from "./styles.module.scss";

export const SuccessButton = ({ textName, onclick, type }) => {
  return (
    <button onClick={onclick} type={type} className={`${styles.buttonContainer} ${styles.success}`}>
      <span className={styles.btnText}>{textName}</span>
    </button>
  );
};
