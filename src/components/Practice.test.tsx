import { render, screen } from "@testing-library/react";
import Practice from "./Practice";
import "@testing-library/jest-dom";

describe("Practice", () => {
  test("renders correctly", () => {
    render(<Practice />);
    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const textareaElement = screen.getByRole("ttextbox", { name: "Bio" });
    expect(textareaElement).toBeInTheDocument();

    const termsCheckBox = screen.getByRole("checkbox");
    expect(termsCheckBox).toBeInTheDocument();

    const h1Element = screen.getByRole('heading', {level:1})
    expect(h1Element).toBeInTheDocument

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });
});
