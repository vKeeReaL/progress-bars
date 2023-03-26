import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProgressBars from "./ProgressBars";

describe("ProgressBars component", () => {
  test("Renders with correct title", () => {
    render(<ProgressBars />);
    expect(screen.getByText("Progress Bars Demo")).toBeInTheDocument();
  });

  test("Renders 3 progress bars", () => {
    render(<ProgressBars />);
    const progressElements = screen.getAllByRole("progressbar");
    expect(progressElements.length).toBe(3);
  });

  test("Renders 4 progress actions buttons", () => {
    render(<ProgressBars />);
    const progressButtons = screen.getAllByRole("button");
    expect(progressButtons.length).toBe(4);
  });
});
