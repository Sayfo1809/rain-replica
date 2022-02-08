import React from "react";

import styles from "../../css/buttons.module.css";

const ButtonSpecial = ({ onClick }) => {
  return (
    <button
      className={`${styles.btn} ${styles["btn--special"]}`}
      onClick={onClick}
    >
      view
    </button>
  );
};

export default ButtonSpecial;
