import React from "react";
import Button from "../buttons/Button";

const CardIllustrativeFront = ({
  styles,
  cardHeader,
  cardImage,
  imageAltText,
  buttonText,
}) => {
  return (
    <div className={styles["card__front"]}>
      <div className={styles["card__header"]}>{cardHeader}</div>
      <div className={styles["card__content"]}>
        <img
          className={styles["card__img"]}
          src={cardImage}
          alt={imageAltText}
        />
      </div>
      <Button buttonText={buttonText} />
    </div>
  );
};

export default CardIllustrativeFront;
