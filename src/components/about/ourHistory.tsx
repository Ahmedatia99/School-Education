import React from "react";
import SubContainer from "../common/SubContainer";
import History from "../common/History";

function ourHistory() {
  return (
    <div>
      <SubContainer
        btnText="Our Progressive Journey"
        h2Text="Our History"
        pText="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
      />

      <History />
    </div>
  );
}

export default ourHistory;
