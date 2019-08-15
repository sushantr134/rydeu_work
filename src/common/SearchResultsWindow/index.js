import React from "react";

import styles from "./styles.module.scss";

export const SearchResults = ({ data, handleSearch }) => {
  if (typeof data === undefined || data.length <= 0) {
    return null;
  } else {
    return (
      <div className={styles.searchContainer}>
        <ul>
          {data.map((obj, i) => (
            <li key={i} onClick={event => handleSearch(obj)}>
              <h4>{i}</h4>
              <h6>sasa</h6>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
