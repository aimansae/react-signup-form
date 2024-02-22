import { screen, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form';
import userEvent from '@testing-library/user-event';

describe('Form inputs correctly', () => {
  test('Welcome Heading is rendered', () => {
    render(<Form />);
    const heading1 = screen.getByRole('heading', { name: /welcome to focus!/i });
    expect(heading1).toBeInTheDocument();
  });

  test('Register Heading is rendered', () => {
    render(<Form />);
    const heading2 = screen.getByRole('heading', { name: /register your account/i });
    expect(heading2).toBeInTheDocument();
  });

  test('Username input is rendered', () => {
    render(<Form />);
    const usernameIput = screen.getByRole('textbox', { name: 'Username' });
    expect(usernameIput).toBeInTheDocument();
  });
  test('Email input is rendered', () => {
    render(<Form />);
    const emailInput = screen.getByRole('textbox', { name: 'Email' });
    expect(emailInput).toBeInTheDocument;
  });

  test('Password input is rendered', () => {
    render(<Form />);
    const passwordInput = screen.getByLabelText('Password');
    expect(passwordInput).toBeInTheDocument();
  });

  test('Login button is rendered', () => {
    render(<Form />);
    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(loginButton).toBeInTheDocument();
  });

  //   test('All inputs are being highlighted on focus', () => {
  //     const inputs = screen.getAllByRole('textbox');
  //     //Simulate click
  //     inputs.forEach((input) => {
  //       userEvent.click(input);
  //     });
  //     expect(inputs).toHaveClass('focus:border-[#7433FF]');
});

describe('Form inputs validated and errors are showing', () => {
  test('Input Username is correctly validated', async () => {
    render(<Form />);
    const usernameInput = screen.getByLabelText('Username');
    const loginButton = screen.getByRole('button', { name: 'Login' });

    userEvent.type(usernameInput, 'a');
    userEvent.click(loginButton);
    await waitFor(
      () => {
        const errorMessage = screen.getByText('Minimum 3 character required');
        expect(errorMessage).toBeInTheDocument();
      },
      { timeout: 4000 }
    );
  });
});
