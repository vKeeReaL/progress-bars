import { render, fireEvent, screen } from "@testing-library/react";
import ProgressButton from "./ProgressButton";

describe("ProgressButton", () => {
  test("Has positive value", () => {
    render(<ProgressButton value={10} />);
    expect(screen.getByText("+10")).toBeInTheDocument();
  });

  test("Has negative value", () => {
    render(<ProgressButton value={-10} />);
    expect(screen.getByText("-10")).toBeInTheDocument();
  });
});
