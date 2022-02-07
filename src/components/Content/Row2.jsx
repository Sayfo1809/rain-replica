import React from "react";
import Card from "../cards/Card";

const Row2 = ({ thirdCard, fifthCard, sixthCard }) => {
  return (
    <div className="row-2">
      <div className="col-1_3">
        <Card
          cardType="standard"
          cardHeader="Unlimited 4G for any device"
          cardPrice="479"
          cardDuration="month-to-month"
          cardImage={thirdCard}
          imageAltText="Unlimited 4G for any device"
        />
      </div>
      <div className="col-1_3">
        <Card
          cardType="standard"
          cardHeader="Unlimited 4G for phones"
          cardPrice="299"
          cardDuration="month-to-month"
          cardImage={fifthCard}
          imageAltText="Unlimited 4G for phones"
        />
      </div>
      <div className="col-1_3">
        <Card
          cardType="illustrative"
          cardHeader="Check coverage"
          cardImage={sixthCard}
          imageAltText="Coverage map image"
        />
      </div>
    </div>
  );
};

export default Row2;
