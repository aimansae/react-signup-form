import { render, screen } from "@testing-library/react";
import Card from "./Card";

test("h contains a text", () => {
  render(<Card />);
  const textElement = screen.getByRole("heading", { level: 1 });
  expect(textElement.textContent).toBe("Hello");
});
