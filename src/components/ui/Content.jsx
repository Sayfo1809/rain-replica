import React from "react";

import Row1 from "../Content/Row1";
import Row2 from "../Content/Row2";
import Row3 from "../Content/Row3";
import Row4 from "../Content/Row4";
import Row5 from "../Content/Row5";

import Card from "../cards/Card";

// IMAGE IMPORTS
import firstCard from "../../img/card-1.png";
import secondCard from "../../img/card-2.png";
import thirdCard from "../../img/card-3_4_12.png";
import fifthCard from "../../img/card-5.png";
import sixthCard from "../../img/card-6.png";
import seventhCard from "../../img/card-7.png";
import eighthCard from "../../img/card-8.png";
import ninthCard from "../../img/card-9.png";
import tenthCard from "../../img/card-10.png";
import eleventCard from "../../img/card-11.png";
import thirteenthCard from "../../img/card-13.png";

const Content = () => {
  return (
    <React.Fragment>
      <Row1
        firstCard={firstCard}
        secondCard={secondCard}
        thirdCard={thirdCard}
      />
      <Row2 thirdCard={thirdCard} fifthCard={fifthCard} sixthCard={sixthCard} />
      <Row3
        seventCard={seventhCard}
        eighthCard={eighthCard}
        ninthCard={ninthCard}
      />
      <Row4
        tenthCard={tenthCard}
        eleventhCard={eleventCard}
        thirdCard={thirdCard}
      />
      <Row5 thirteenthCard={thirteenthCard} />
    </React.Fragment>
  );
};

export default Content;
