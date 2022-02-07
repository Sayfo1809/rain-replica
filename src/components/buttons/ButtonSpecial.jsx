import React from "react";

import styles from "../../css/buttons.module.css";

const ButtonSpecial = () => {
  return (
    <a href="#" className={`${styles.btn} ${styles["btn--special"]}`}>
      view
    </a>
  );
};

export default ButtonSpecial;
