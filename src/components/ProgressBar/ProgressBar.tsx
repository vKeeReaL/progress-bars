import { FC } from "react";

import StyledProgressBar from "./ProgressBar.styled";
import { ProgressBarsType } from "../ProgressBars/ProgressBars.type";
import useProgressAmount from "../../hooks/useProgressAmount";

const ProgressBar: FC<ProgressBarsType> = function ({ amount = 0, id }) {
  const progressAmount = useProgressAmount(id, amount);

  return (
    <StyledProgressBar amount={progressAmount} role="progressbar">
      {progressAmount}%
    </StyledProgressBar>
  );
};

export default ProgressBar;
