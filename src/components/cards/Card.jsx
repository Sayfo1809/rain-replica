import React from "react";

import CardFront from "./CardFront";
import CardIllustrativeFront from "./CardIllustrativeFront";
import CardSpecialFront from "./CardSpecialFront";
import CardBack from "./CardBack";

import styles from "../../css/card.module.css";

// CARD TYPES
// STANDARD
// SPECIAL
// ILLUSTRATIVE

const Card = ({
  cardType,
  cardHeader,
  cardPrice,
  cardDuration,
  cardImage,
  imageAltText,
  buttonText,
}) => {
  return (
    <React.Fragment>
      {cardType === "standard" ? (
        <div className={`${styles.card} card`}>
          <div className={styles["card__flip"]}>
            <CardFront
              styles={styles}
              cardHeader={cardHeader}
              cardPrice={cardPrice}
              cardDuration={cardDuration}
              cardImage={cardImage}
              imageAltText={imageAltText}
              buttonText={buttonText}
            />
            <CardBack styles={styles} />
          </div>
        </div>
      ) : cardType === "special" ? (
        <div className={`${styles.card} card ${styles["card__special"]}`}>
          <div className={styles["card__flip"]}>
            <CardSpecialFront
              styles={styles}
              cardHeader={cardHeader}
              cardPrice={cardPrice}
              cardDuration={cardDuration}
              cardImage={cardImage}
              imageAltText={imageAltText}
              buttonText={buttonText}
            />
            <CardBack styles={styles} />
          </div>
        </div>
      ) : cardType === "illustrative" ? (
        <div className={`${styles.card} card`}>
          <div className={styles["card__flip"]}>
            <CardIllustrativeFront
              styles={styles}
              cardHeader={cardHeader}
              cardImage={cardImage}
              imageAltText={imageAltText}
              buttonText={buttonText}
            />
            <CardBack styles={styles} />
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Card;
