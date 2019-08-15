import React from "react";
import styles from "./styles.module.scss";

import { SuccessButton } from "../../common/Button/success";

export const FormContainer = props => {
  return (
    <div className={styles.formContainer}>
      <h1>{props.heading}</h1>
      <form>
        {props.children}
        <SuccessButton textName='Continue' onclick={() => alert("hello")} type='submit' />
      </form>
    </div>
  );
};
