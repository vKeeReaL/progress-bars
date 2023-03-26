import { FC } from "react";
import StyledApp from "./App.styled";
import ProgressBars from "../ProgressBars/ProgressBars";

const App: FC = function () {
  return (
    <StyledApp>
      <ProgressBars />
    </StyledApp>
  );
};

export default App;
