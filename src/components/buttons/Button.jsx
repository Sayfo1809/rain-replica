import React from "react";

import styles from "../../css/buttons.module.css";

const Button = ({ buttonText, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {buttonText}
    </button>
  );
};

Button.defaultProps = {
  buttonText: "view",
};

export default Button;
