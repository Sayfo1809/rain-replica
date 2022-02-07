import React from "react";
import Button from "../buttons/Button";

const CardFront = ({
  styles,
  cardHeader,
  cardImage,
  imageAltText,
  cardPrice,
  cardDuration,
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
        <div className={styles["card__pricing"]}>
          <p className={styles["card__price"]}>
            {" "}
            <span>R</span> {cardPrice}
          </p>
          <p className={styles["card__price--terms"]}>{cardDuration}</p>
        </div>
      </div>
      <Button buttonText={buttonText} />
    </div>
  );
};

export default CardFront;
