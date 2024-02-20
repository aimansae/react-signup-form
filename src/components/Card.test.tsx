import { render } from "@testing-library/react";
import Card from "./Card";
import "@testing-library/jest-dom";

describe("Card Component", () => {
  test("Card renders Form Component", () => {
    const { getByTestId } = render(<Card />);
    const formComponent = getByTestId("form-component");
    expect(formComponent).toBeInTheDocument();
  });
});
