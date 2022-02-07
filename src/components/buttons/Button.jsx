import React from "react";

import styles from "../../css/buttons.module.css";

const Button = ({ buttonText }) => {
  return (
    <a href="#" className={styles.btn}>
      {buttonText}
    </a>
  );
};

Button.defaultProps = {
  buttonText: "view",
};

export default Button;
