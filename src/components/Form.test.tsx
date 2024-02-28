import { screen, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form';
import userEvent from '@testing-library/user-event';

// describe('Form inputs correctly', () => {
//   test('Welcome Heading is rendered', () => {
//     render(<Form />);
//     const heading1 = screen.getByRole('heading', { name: /welcome to focus!/i });
//     expect(heading1).toBeInTheDocument();
//   });

//   test('Register Heading is rendered', () => {
//     render(<Form />);
//     const heading2 = screen.getByRole('heading', { name: /register your account/i });
//     expect(heading2).toBeInTheDocument();
//   });

//   test('Username input is rendered', () => {
//     render(<Form />);
//     const usernameIput = screen.getByRole('textbox', { name: 'Username' });
//     expect(usernameIput).toBeInTheDocument();
//   });
//   test('Email input is rendered', () => {
//     render(<Form />);
//     const emailInput = screen.getByRole('textbox', { name: 'Email' });
//     expect(emailInput).toBeInTheDocument;
//   });

//   test('Password input is rendered', () => {
//     render(<Form />);
//     const passwordInput = screen.getByLabelText('Password');
//     expect(passwordInput).toBeInTheDocument();
//   });

//   test('Login button is rendered', () => {
//     render(<Form />);
//     const loginButton = screen.getByRole('button', { name: 'Login' });
//     expect(loginButton).toBeInTheDocument();
//   });
// });

// describe('Inputs are heighlighted on click', () => {
//   test('Check higlight class', () => {
//     render(<Form />);

//     const usernameInput = screen.getByLabelText('Username');
//     const emailInput = screen.getByLabelText('Email');
//     const passwordInput = screen.getByLabelText('Password');

//     userEvent.click(usernameInput);
//     userEvent.click(emailInput);
//     userEvent.click(passwordInput);

//     expect(usernameInput).toHaveClass('focus:border-[#7433FF]');
//     expect(emailInput).toHaveClass('focus:border-[#7433FF]');
//     expect(passwordInput).toHaveClass('focus:border-[#7433FF]');
//   });
// });

describe('Inputs are correctly vaidated', () => {
  test('Errors for empty input fields fields are being shown', async () => {
    render(<Form />);

    // Click the login button to trigger validation
    userEvent.click(screen.getByText('Login'));

    // Check if the error message contains the expected text
    await waitFor(() => {
      const usernameErrorMessage = screen.getByTestId('username-error');
      expect(usernameErrorMessage).toHaveTextContent('Username is required');

      const emailErrorMessage = screen.getByTestId('email-error');
      expect(emailErrorMessage).toHaveTextContent('Email is required');

      const passwordErrorMessage = screen.getByTestId('password-error');
      expect(passwordErrorMessage).toHaveTextContent('Password is required');
    });
  });
  test.only('show validation errors for each typing scenario', async () => {
    render(<Form />);
    // get the username
    const usernameInput = screen.getByLabelText('Username');
    console.log(usernameInput);
    usernameInput.focus();

    // Click the login button to trigger validation
    userEvent.type(usernameInput, '1');
    userEvent.click(screen.getByText('Login'));

    await waitFor(() => {
      const usernameErrorMessage = screen.getByTestId('username-error');
      expect(usernameErrorMessage).toHaveTextContent('Only Letters are allowed');
    });
  });
});
