import React from "react";
import Button from "../buttons/Button";

const CardBack = ({ styles, onClick }) => {
  return (
    <div className={styles["card__back"]}>
      <Button buttonText="back" onClick={onClick} />
    </div>
  );
};

export default CardBack;
