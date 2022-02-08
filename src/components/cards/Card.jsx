import React, { useState } from "react";

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
  const [flipCard, setFliipCard] = useState(true);
  const [cardFlipper, setCardFlipper] = useState("");

  const cardFlipHandler = () => {
    setFliipCard((prevState) => !prevState);

    console.log(flipCard);

    if (flipCard) {
      setCardFlipper(`${styles["card__flip"]}`);
    } else if (!flipCard) setCardFlipper("");
    // console.log("button clicked", flipCard, cardFlipper);
  };

  return (
    <React.Fragment>
      {cardType === "standard" ? (
        <div className={`${styles.card} card`}>
          <div className={cardFlipper}>
            <CardFront
              styles={styles}
              cardHeader={cardHeader}
              cardPrice={cardPrice}
              cardDuration={cardDuration}
              cardImage={cardImage}
              imageAltText={imageAltText}
              buttonText={buttonText}
              onClick={cardFlipHandler}
            />
            <CardBack styles={styles} onClick={cardFlipHandler} />
          </div>
        </div>
      ) : cardType === "special" ? (
        <div className={`${styles.card} card ${styles["card__special"]}`}>
          <div className={cardFlipper}>
            <CardSpecialFront
              styles={styles}
              cardHeader={cardHeader}
              cardPrice={cardPrice}
              cardDuration={cardDuration}
              cardImage={cardImage}
              imageAltText={imageAltText}
              buttonText={buttonText}
              onClick={cardFlipHandler}
            />
            <CardBack styles={styles} onClick={cardFlipHandler} />
          </div>
        </div>
      ) : cardType === "illustrative" ? (
        <div className={`${styles.card} card`}>
          <div className={cardFlipper}>
            <CardIllustrativeFront
              styles={styles}
              cardHeader={cardHeader}
              cardImage={cardImage}
              imageAltText={imageAltText}
              buttonText={buttonText}
              onClick={cardFlipHandler}
            />
            <CardBack styles={styles} onClick={cardFlipHandler} />
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Card;
