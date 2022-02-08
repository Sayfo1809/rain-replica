import React from "react";
import ButtonSpecial from "../buttons/ButtonSpecial";

const CardSpecialFront = ({
  styles,
  cardHeader,
  cardImage,
  imageAltText,
  cardPrice,
  cardDuration,
  onClick,
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
          <p className={styles["card__price"]}>{cardPrice}</p>
          <p className={styles["card__price--terms"]}>{cardDuration}</p>
        </div>
      </div>
      <ButtonSpecial onClick={onClick} />
    </div>
  );
};

export default CardSpecialFront;
