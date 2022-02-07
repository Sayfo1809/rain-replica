import React from "react";
import Card from "../cards/Card";

const Row4 = ({ tenthCard, eleventhCard, thirdCard }) => {
  return (
    <div className="row-4">
      <div className="col-1_3">
        <Card
          cardType="illustrative"
          cardHeader="pick up a 4G SIM today"
          cardImage={tenthCard}
          imageAltText="Shop locations illustratin"
          buttonText="view"
        />
      </div>
      <div className="col-1_3">
        <Card
          cardType="illustrative"
          cardHeader="add a 4G SIM while you shop online"
          cardImage={eleventhCard}
          imageAltText="Sim activation illustration"
          buttonText="view"
        />
      </div>
      <div className="col-1_3">
        <Card
          cardType="illustrative"
          cardHeader="more about 4G"
          cardImage={thirdCard}
          imageAltText="Sim illustration"
          buttonText="learn more"
        />
      </div>
    </div>
  );
};

export default Row4;
