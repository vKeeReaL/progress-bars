import styled from "@emotion/styled";
import { ProgressBarsType } from "../ProgressBars/ProgressBars.type";

const StyledProgressBar = styled.div<ProgressBarsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border: 1px solid #ccc;
  margin: 10px 0;
  width: 100%;
  position: relative;

  &::before {
    content: "";
    width: ${(props) => (props.amount >= 100 ? "100" : props.amount)}%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${(props) =>
      props.amount > 100 ? "red" : "lightskyblue"};
    height: 40px;
    z-index: -10;
    transition: width 0.3s;
  }
`;

export default StyledProgressBar;
