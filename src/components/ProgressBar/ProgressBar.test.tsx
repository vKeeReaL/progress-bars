import { render, screen } from "@testing-library/react";
import ProgressBar from "./ProgressBar";

describe("ProgressBar component", () => {
  test("Render with default amount", () => {
    render(<ProgressBar id={1} />);
    expect(screen.getByText("0%")).toBeInTheDocument();
  });

  test("Render with positive amount", () => {
    render(<ProgressBar id={2} amount={120} />);
    expect(screen.getByText("120%")).toBeInTheDocument();
  });
});
