import React from "react";
import Card from "../cards/Card";

const Row1 = ({ firstCard, secondCard, thirdCard }) => {
  return (
    <div className="row-1">
      <div className="col-1_3">
        <Card
          cardType="special"
          cardHeader="Unlimited home 5G premium"
          cardPrice="now R699"
          cardDuration="for the first 3 months"
          cardImage={firstCard}
          imageAltText="5G home internet"
        />
      </div>
      <div className="col-1_3">
        <Card
          cardType={"special"}
          cardHeader="Unlimited home 5G premium"
          cardPrice="now R699"
          cardDuration="for the first 3 months"
          cardImage={secondCard}
          imageAltText="5G home internet"
        />
      </div>
      <div className="col-1_3">
        <Card
          cardType={"standard"}
          cardHeader="19 hours unlimited off-peak for any device"
          cardPrice="250"
          cardDuration="month-to-month"
          cardImage={thirdCard}
          imageAltText="5G home internet"
        />
      </div>
    </div>
  );
};

export default Row1;
