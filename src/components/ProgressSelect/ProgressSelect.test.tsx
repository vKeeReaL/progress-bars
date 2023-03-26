import { render, screen } from "@testing-library/react";
import ProgressSelect from "./ProgressSelect";

describe("ProgressSelect", () => {
  test("Renders options", () => {
    render(<ProgressSelect />);
    const select = screen.getByDisplayValue("#progress1");
    expect(select).toBeInTheDocument();
  });
});
