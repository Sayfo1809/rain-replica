import React from "react";
import Card from "../cards/Card";

const Row5 = ({ thirteenthCard }) => {
  return (
    <div className="row-5">
      <div className="col-1_3">
        <Card
          cardType="illustrative"
          cardHeader="more about 5G"
          cardImage={thirteenthCard}
          imageAltText="5G router illustration"
          buttonText="learn more"
        />
      </div>
    </div>
  );
};

export default Row5;
