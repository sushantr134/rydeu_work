import React from "react";

import styles from "./styles.module.scss";

export const SearchResults = ({ data }) => {
  if (typeof data === undefined || data.length <= 0) {
    return null;
  } else {
    return (
      <div className={styles.searchContainer}>
        <ul>
          {data.map((obj, i) => (
            <li key={i}>Munich</li>
          ))}
        </ul>
      </div>
    );
  }
};
