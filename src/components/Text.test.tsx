import { render, screen } from "@testing-library/react";
import Text from "./Card";

test("h contains a text", () => {
  render(<Text />);
  const textElement = screen.getByRole("heading", { level: 1 });
  expect(textElement.textContent).toBe("Hello");
});
