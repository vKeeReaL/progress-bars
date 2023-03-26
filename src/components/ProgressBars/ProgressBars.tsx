import { FC } from "react";
import PROGRESS_BARS from "../../constants/PROGRESS_BARS";
import PROGRESS_BUTTONS_VALUES from "../../constants/PROGRESS_BUTTONS_VALUES";
import {
  StyledProgressBars,
  StyledProgressActionsPanel,
} from "./ProgressBars.styled";
import ProgressButton from "../ProgressButton/ProgressButton";
import ProgressBar from "../ProgressBar/ProgressBar";
import ProgressSelect from "../ProgressSelect/ProgressSelect";

const ProgressBars: FC = function () {
  return (
    <StyledProgressBars>
      <h1>Progress Bars Demo</h1>
      {PROGRESS_BARS.map(({ id, amount }) => (
        <ProgressBar key={id} amount={amount} id={id} />
      ))}

      <StyledProgressActionsPanel>
        <ProgressSelect />
        {PROGRESS_BUTTONS_VALUES.map((value: number) => (
          <ProgressButton key={value} value={value} />
        ))}
      </StyledProgressActionsPanel>
    </StyledProgressBars>
  );
};

export default ProgressBars;
