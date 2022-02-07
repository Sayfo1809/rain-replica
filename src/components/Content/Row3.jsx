import React from "react";
import Card from "../cards/Card";

const Row3 = ({ seventCard, eighthCard, ninthCard }) => {
  return (
    <div className="row-3">
      <div className="col-1_3">
        <Card
          cardType="illustrative"
          cardHeader="Manage and take control of your account"
          cardImage={seventCard}
          imageAltText="Sign in illustration"
          buttonText="sign in"
        />
      </div>
      <div className="col-1_3">
        <Card
          cardType="illustrative"
          cardHeader="Got your 4G sim?"
          cardImage={eighthCard}
          imageAltText="Sim activation illustration"
          buttonText="view"
        />
      </div>
      <div className="col-1_3">
        <Card
          cardType="illustrative"
          cardHeader="get your 4G SIM delivered now"
          cardImage={ninthCard}
          imageAltText="Sim delivery illustration"
          buttonText="view"
        />
      </div>
    </div>
  );
};

export default Row3;
